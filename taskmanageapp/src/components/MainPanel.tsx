"use client"
import React, { useEffect, useState } from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa'; // アイコンのインポート
import Header from './Header';

import { Task } from '../types/task'
import TaskList from './TaskList';
import TaskLabel from './TaskLabel';
import TaskModal from './TaskModal';

const MainPanel = () => {
    useEffect(() => {
        console.log("hoge")
        const fetchTodos = async () => {
        try {
            console.log("api")
            const response = await fetch('/api/tasks');
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // setRecommendations(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
        };
    
        fetchTodos();
    }, []); 

    const initialTasks = [
        {id: 1, title: 'プロジェクトA', description: "hogehoge", percentage: 75 },
        {id: 2, title: 'プロジェクトB', description: "hogehoge", percentage: 50 },
    ]

    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [newTask, setNewTask] = useState<Task>({ id: 0, title: '', description: '', percentage: 0});
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleAddTask = () => {
        setIsModalOpen(true); // モーダルを開く
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // モーダルを閉じる
    };

    const handleSubmitTask = (task: Task) => {
        setTasks(prevTasks => {
            // task.id が存在するか確認
            const existingTaskIndex = prevTasks.findIndex(t => t.id === task.id);
    
            if (existingTaskIndex !== -1) {
                // 更新処理: 既存のタスクを更新
                const updatedTasks = [...prevTasks];
                updatedTasks[existingTaskIndex] = task; // 該当のタスクを更新
                return updatedTasks;
            } else {
                // 挿入処理: 新しいタスクを追加
                return [...prevTasks, { ...task, id: prevTasks.length + 1 }];
            }
        });
    };

    const handleDeleteTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id != taskId));
    }

    const handleEditTask = (task: Task) => {
        setEditingTask(task);
        setIsModalOpen(true);
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow py-6 px-6'>
                <TaskLabel onAdd={handleAddTask}/>
                <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask}/>
            </main>

            {/* 新規作成モーダル */}
            <TaskModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                handleSubmitTask={handleSubmitTask} 
                editingTask={editingTask}
            />
        </div>
    )
}

export default MainPanel;