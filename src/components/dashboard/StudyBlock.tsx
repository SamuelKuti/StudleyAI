import { FC, useState, useEffect, useRef } from 'react';
import '../../../styles/progressbar.css';
import editIcon from '/assets/edit.png';
import deleteIcon from '/assets/trash.png';
import pencilIcon from '/assets/pencil.png';
import { RenameDialog } from './RenameDialog';

interface StudyBlockProps {
  studySetName: string;
  unfamiliar: number;
  learning: number;
  mastered: number;
  familiar: number;
}

export const StudyBlock: FC<StudyBlockProps> = ({ studySetName, unfamiliar, learning, mastered, familiar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isRenameDialogOpen, setRenameDialogOpen] = useState(false);
  const [currentName, setCurrentName] = useState(studySetName);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const total = unfamiliar + learning + mastered + familiar;

  let unfamiliarPercentage = Math.max(20, Math.min(80, (unfamiliar / total) * 100));
  let learningPercentage = Math.max(20, Math.min(80, (learning / total) * 100));
  let masteredPercentage = Math.max(20, Math.min(80, (mastered / total) * 100));
  let familiarPercentage = Math.max(20, Math.min(80, (familiar / total) * 100));

  const toggleDropdown = (): void => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleRenameClick = (): void => {
    setDropdownOpen(false);
    setRenameDialogOpen(true);
  };

  const handleRename = (newName: string): void => {
    setCurrentName(newName);
    setRenameDialogOpen(false);
  };

  const handleDelete = (): void => {
    console.log('Delete clicked');
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <>
      <button className="bg-light border-[#E4E4E7] border-2 rounded-md w-full h-[250px] flex flex-col justify-center hover:bg-[#E4E4E7] transition-colors relative">
        <div className="flex justify-between items-center w-[95%]">
          <h2 className="text-lg tracking-wide ml-6 mb-2">{currentName}</h2>
          <button onClick={toggleDropdown} className="relative mb-4">
            <img src={editIcon} alt="edit" className="w-4 h-4" />
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-32"
            >
              <button
                onClick={handleRenameClick}
                className="w-full px-2 py-1 text-left text-gray-700 text-sm hover:bg-gray-100 rounded-t-lg flex gap-1 items-center"
              >
                <div>Rename</div>
                <img src={pencilIcon} alt="rename" className="w-4 h-4" />
              </button>
              <button
                onClick={handleDelete}
                className="w-full px-2 py-1 text-left text-red-500 text-sm hover:bg-gray-100 rounded-b-lg flex gap-1 items-center"
              >
                <div>Delete</div>
                <img src={deleteIcon} alt="delete" className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full gap-2 ml-6">
          <div className="flex items-center gap-2">
            <div className="border border-[#E4E4E7] h-7 w-8 text-md rounded-lg flex justify-center items-center">
              {unfamiliar.toFixed(0)}
            </div>
            <div
              className="bg-red-100 text-red-600 border border-red-100 rounded-lg h-7 flex items-center px-2"
              style={{ flexBasis: `${unfamiliarPercentage}%` }}
            >
              Unfamiliar
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="border border-[#E4E4E7] h-7 w-8 text-md rounded-lg flex justify-center items-center">
              {learning.toFixed(0)}
            </div>
            <div
              className="bg-orange-100 text-orange-600 border border-orange-100 rounded-lg h-7 flex items-center px-2"
              style={{ flexBasis: `${learningPercentage}%` }}
            >
              Still Learning
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="border border-[#E4E4E7] h-7 w-8 text-md rounded-lg flex justify-center items-center">
              {familiar.toFixed(0)}
            </div>
            <div
              className="bg-blue-100 text-blue-600 border border-blue-100 rounded-lg h-7 flex items-center px-2"
              style={{ flexBasis: `${familiarPercentage}%` }}
            >
              Familiar
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="border border-[#E4E4E7] h-7 w-8 text-md rounded-lg flex justify-center items-center">
              {mastered.toFixed(0)}
            </div>
            <div
              className="bg-green-100 text-green-600 border border-green-100 rounded-lg h-7 flex items-center px-2"
              style={{ flexBasis: `${masteredPercentage}%` }}
            >
              Mastered
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-600 ml-6 mt-2">Your path to mastery</div>
        <div className="flex items-center gap-2 ml-6 w-[95%]">
          <progress
            value={masteredPercentage}
            max={100}
            className="w-5/6 h-2 rounded-full"
          ></progress>
          <div className="text-lg float-right text-gray-600 w-auto w-1/6">
            {Math.round(masteredPercentage * 100) / 100} %
          </div>
        </div>
      </button>
      <RenameDialog
        isOpen={isRenameDialogOpen}
        onClose={() => setRenameDialogOpen(false)}
        onRename={handleRename}
      />
    </>
  );
};
