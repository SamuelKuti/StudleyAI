import { FC, useState } from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onRename: (newName: string) => void;
}

export const RenameDialog: FC<DialogProps> = ({ isOpen, onClose, onRename }) => {
  const [newName, setNewName] = useState('');

  const handleRename = (): void => {
    if (newName.trim()) {
      onRename(newName.trim());
      setNewName(''); // Clear the input
      onClose(); // Close the dialog
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[500px] relative">
        <h2 className="text-lg mb-4">Rename your study set</h2>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New name"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black p-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleRename}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Rename
          </button>
        </div>
      </div>
    </div>
  );
};
