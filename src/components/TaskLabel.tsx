import React from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa'; // アイコンのインポート
import { Task } from '../types/task';

interface TaskLabelProps {
    task: Task;
}

const TaskLabel: React.FC<{
    onAdd: () => void;
}> = ({ onAdd }) => {
    return (
        <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-bold mb-4'>タスク一覧</h2>
            <button 
                className='bg-green-500 text-white p-2 rounded-full'
                onClick={onAdd}
            >
                <FaPlus />
            </button>
        </div>
    );
}

export default TaskLabel;