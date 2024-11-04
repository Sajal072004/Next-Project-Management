import { Task } from '@/src/state/api';
import React from 'react';
import { format } from "date-fns";
import Image from 'next/image';

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className='mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white'>
      {task.attachments && task.attachments.length > 0 && (
        <div>
          <strong className="text-md">Attachments:</strong> {/* Moderate text size */}
          <div className='flex flex-wrap mb-4 mt-6'>
            {task.attachments.length > 0 && (
              <Image
                src={`/${task.attachments[0].fileURL}`}
                alt={task.attachments[0].fileName}
                width={400}
                height={200}
                className="rounded-md"
              />
            )}
          </div>
        </div>
      )}

      <p className='mb-2 text-md'> {/* Moderate text size */}
        <strong>ID:</strong> {task.id}
      </p>
      <p className='mb-2 text-md'>
        <strong>Title:</strong> {task.title}
      </p>
      <p className='mb-2 text-md'>
        <strong>Description:</strong> {task.description || "No description provided"}
      </p>

      <p className='mb-2 text-md'>
        <strong>Status:</strong> {task.status}
      </p>

      <p className='mb-2 text-md'>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p className='mb-2 text-md'>
        <strong>Tags:</strong> {task.tags || "No Tags"}
      </p>

      <p className='mb-2 text-md'>
        <strong>Start Date:</strong> {task.startDate ? format(new Date(task.startDate), "P") : "Not Set"}
      </p>

      <p className='mb-2 text-md'>
        <strong>Due Date:</strong> {task.dueDate ? format(new Date(task.dueDate), "P") : "Not Set"}
      </p>

      <p className='mb-2 text-md'>
        <strong>Author:</strong> {task.author ? task.author.username : "Unknown"}
      </p>

      <p className='mb-2 text-md'>
        <strong>Assignee:</strong> {task.assignee ? task.assignee.username : "Unassigned"}
      </p>
    </div>
  );
};

export default TaskCard;
