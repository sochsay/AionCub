import React from "react";
import { Thought } from "@prisma/client";

type Props = { thought: Thought & { author: { name: string, image?: string } } };

export const PostCard: React.FC<Props> = ({ thought }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-3">
        <img src={thought.author.image || '/avatar.png'} className="w-8 h-8 rounded-full" alt="" />
        <span className="font-semibold">{thought.author.name}</span>
      </div>
      <p className="text-gray-800">{thought.content}</p>
    </div>
  );
};
