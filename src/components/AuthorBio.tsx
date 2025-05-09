import React from 'react';

interface AuthorBioProps {
  name: string;
  bio: string;
  imageUrl: string;
  twitterHandle?: string;
  linkedinProfile?: string;
  specialization?: string;
}

const AuthorBio = ({ 
  name, 
  bio, 
  imageUrl,
  twitterHandle,
  linkedinProfile,
  specialization = "Content Creation"
}: AuthorBioProps) => {
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
        {specialization && (
          <p className="text-sm text-primary mb-2">Expert in {specialization}</p>
        )}
        <p className="text-gray-600 mb-2">{bio}</p>
        
        {/* Social links */}
        {(twitterHandle || linkedinProfile) && (
          <div className="flex space-x-3 mt-2">
            {twitterHandle && (
              <a 
                href={`https://twitter.com/${twitterHandle}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition-colors"
              >
                Twitter
              </a>
            )}
            {linkedinProfile && (
              <a 
                href={`https://linkedin.com/in/${linkedinProfile}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorBio;
