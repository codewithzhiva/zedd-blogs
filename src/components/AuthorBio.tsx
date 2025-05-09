
import React from 'react';

interface AuthorBioProps {
  name: string;
  bio: string;
  imageUrl: string;
}

const AuthorBio = ({ name, bio, imageUrl }: AuthorBioProps) => {
  return (
    <div className="gradient-card flex flex-col md:flex-row md:items-center my-8">
      <div className="border-2 border-black p-1 bg-white shadow-retro mr-6 mb-4 md:mb-0 w-20 h-20 flex-shrink-0">
        <img
          src={imageUrl}
          alt={`Photo of ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="font-retro font-bold text-lg mb-1 rainbow-text">Written by {name}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default AuthorBio;
