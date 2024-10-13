"use client"
import React, { useEffect, useState } from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa'; // アイコンのインポート

import { Task } from '../types/task'

const TaskList: React.FC<{
    tasks: Task[];
    onEdit: (task: Task) => void;
    onDelete: (taskId: number) => void;
}> = ({tasks, onEdit, onDelete}) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} className='border-b py-2 flex justify-between items-center'>
                    <div>
                        <h3 className='font-semibold'>{task.title}</h3>
                        <p>{task.description}</p>
                        <span className='text-sm text-gray-600'>{task.percentage}% 完了</span>
                    </div>
                    <div className='flex space-x-2'>
                        <button className='text-blue-500' >
                            <FaEdit />
                        </button>
                        <button className="text-red-500" >
                            <FaTrash />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TaskList;