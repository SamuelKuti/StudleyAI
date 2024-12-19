import { FC, useState } from 'react';
import { Trash } from 'lucide-react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: (isDeleted: boolean) => void;
}

export const DeleteDialog: FC<DialogProps> = ({ isOpen, onClose, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (): void => {
    setIsDeleting(true);
    onDelete(true);  // Notify parent that the item is being deleted
    onClose();       // Close the dialog
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[500px] relative">
        <h2 className="text-lg mb-4">Are you sure you want to delete this study set?</h2>
        <div className="flex justify-end gap-2 w-full">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black p-2 w-1/2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-2 w-1/2 rounded-md"
          >
            <div className="flex items-center justify-center gap-1">
              <div>Delete</div>
              <Trash className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
