
import React from 'react';

interface AuthorBioProps {
  name: string;
  bio: string;
  imageUrl: string;
}

const AuthorBio = ({ name, bio, imageUrl }: AuthorBioProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center bg-gray-50 rounded-lg p-6 my-8">
      <img
        src={imageUrl}
        alt={`Photo of ${name}`}
        className="w-20 h-20 rounded-full object-cover mr-6 mb-4 md:mb-0"
      />
      <div>
        <p className="font-semibold text-lg mb-1">Written by {name}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default AuthorBio;
