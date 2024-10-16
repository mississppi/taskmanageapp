import { Task } from '@/types/task';
import React, { useState } from 'react';

const TaskModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    handleSubmitTask: (task: Task) => void;
    editingTask: Task | null;
}> = ({ isOpen, onClose, handleSubmitTask, editingTask }) => {
    const [task, setTask] = useState<Task>({
        id: 0,
        title: '',
        description: '',
        percentage: 0,
    });

    // editingTaskがある場合は、タスクの値で初期化
    React.useEffect(() => {
        if (editingTask) {
            setTask(editingTask);
        } else {
            setTask({ id: 0, title: '', description: '', percentage: 0 });
        }
    }, [editingTask]);


    const onSubmit = (e: React.FormEvent) => {
        console.log('child')
        console.log(task)
        e.preventDefault();
        if(editingTask) {
            handleSubmitTask(task);
        } else {
            handleSubmitTask(task);
        }
        onClose();  // モーダルを閉じる
        setTask({ id: 0, title: '', description: '', percentage: 0 });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">{ editingTask ? 'タスクを編集': '新規タスク作成'}</h2>
                <input 
                    type="text" 
                    placeholder="タスクタイトル" 
                    className="w-full mb-2 p-2 border"
                    value={task.title}
                    onChange={(e) => setTask({ ...task, title: e.target.value})}
                    required
                />
                <textarea 
                    placeholder="タスク説明" 
                    className="w-full mb-2 p-2 border"
                    value={task.description}
                    onChange={(e) => setTask({ ...task, description: e.target.value})}
                />
                {editingTask && (
                    <input
                        type="number"
                        placeholder='進捗 (%)'
                        value={task.percentage}
                        onChange={(e) => setTask({ ...task, percentage: Number(e.target.value) })}
                        required
                    />
                )}
                <div className="flex justify-end space-x-2">
                    <button 
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={onClose}
                    >
                        キャンセル
                    </button>
                    <button 
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        onClick={onSubmit}
                    >
                        作成
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
