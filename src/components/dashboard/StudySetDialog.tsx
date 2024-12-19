import { FC } from 'react';
import FlashcardsIcon from '/assets/flashcardsicon.png';
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudySetDialog: FC<DialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white flex rounded-2xl shadow-lg w-[800px] relative">
        <div className="bg-gray-100 w-1/3 p-6 m-6 text-left rounded-2xl">
          <h3 className="text-lg font-semibold">Create a new study set</h3>
          <h2 className="text-sm text-gray-500 mb-4">with methods that are proven to work:</h2>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
                <div className="w-20 h-16 mr-2 bg-secondary rounded-md flex items-center justify-center">
                    <img src={FlashcardsIcon} alt="Flashcards" className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-bold">Flashcards</h4>
                    <p className="text-sm text-gray-600">Instant flashcards in one click.</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-20 h-16 mr-2 bg-secondary rounded-md flex items-center justify-center">
                    <img src={FlashcardsIcon} alt="Einstein" className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-semibold">Quizzes</h4>
                    <p className="text-sm text-gray-600">Perfectly curated multiple choice quizzes.</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-20 h-16 mr-2 bg-secondary rounded-md flex items-center justify-center">
                    <img src={FlashcardsIcon} alt="Einstein" className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-semibold">Personal tutor</h4>
                    <p className="text-sm text-gray-600">#1 AI tutor powered by GPT-4.</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-20 h-16 mr-2 bg-secondary rounded-md flex items-center justify-center">
                    <img src={FlashcardsIcon} alt="Einstein" className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-semibold">Chat with tutor</h4>
                    <p className="text-sm text-gray-600">Talk with your tutor about your study material.</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-20 h-16 mr-2 bg-secondary rounded-md flex items-center justify-center">
                    <img src={FlashcardsIcon} alt="Einstein" className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-semibold">Written tests</h4>
                    <p className="text-sm text-gray-600">Get feedback on your written responses.</p>
                </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-6">
          <h2 className="text-lg font-semibold mb-4">Name your study session</h2>
          <p className="text-sm text-gray-600 mb-4">This will help you stay organized</p>
          <input
            type="text"
            placeholder="Ex: CSCI 3130 final exam"
            className="border rounded-md w-full p-2 mb-6"
          />
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md ml-2"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
