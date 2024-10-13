"use client"
import React, { useEffect, useState } from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa'; // アイコンのインポート
import Header from './Header';

import { Task } from '../types/task'
import TaskList from './TaskList';

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

    const handleAddTask = () => {
        setTasks([...tasks, { ...newTask, id: tasks.length + 1}]);
        setNewTask({ id: 0, title: '', description: '', percentage: 0})
    };

    const handleDeleteTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id != taskId));
    }

    const handleEditTask = (task: Task) => {
        setIsEditing(true);
        setEditingTask(task);
        setNewTask(task);
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow py-6 px-6'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-2xl font-bold mb-4'>タスク一覧</h2>
                    <button 
                        className='bg-green-500 text-white p-2 rounded-full'
                        onClick={handleAddTask}
                    >
                        <FaPlus />
                    </button>
                </div>
                <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask}/>
            </main>
        </div>
    )
}

export default MainPanel;