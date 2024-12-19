import { FC, useState } from 'react';
import { Sidebar } from '../components/dashboard/Sidebar';
import { StudyBlock } from '../components/dashboard/StudyBlock';
import { CreateButton } from '../components/dashboard/CreateButton';

interface DashboardProps {
  name: string;
}

export const Dashboard: FC<DashboardProps> = ({ name }) => {
  // Manage the sidebar state here
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const contentWidth = sidebarOpen ? 'calc(100% - 330px)' : 'calc(100% - 30px)';  // Dynamically set the width based on sidebarOpen

  return (
    <div className="flex h-screen">
      {/* Sidebar will be fixed on the left */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area, with scrollable right section */}
      <div
        className="flex flex-col w-full overflow-y-auto"
        style={{ width: contentWidth }} // Apply dynamic width via inline style
      >
        <h1 className="text-3xl ml-6 py-6">
          Welcome{name == null ? '' : ', ' + name} 👋
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full px-6">
          <StudyBlock
            studySetName="Math 1030"
            unfamiliar={23}
            learning={10}
            mastered={20}
            familiar={1}
          />
          <StudyBlock
            studySetName="Biology 1010"
            unfamiliar={15}
            learning={12}
            mastered={30}
            familiar={5}
          />
          <StudyBlock
            studySetName="Biology 1010"
            unfamiliar={15}
            learning={12}
            mastered={30}
            familiar={5}
          />
          <StudyBlock
            studySetName="Physics 2020"
            unfamiliar={10}
            learning={8}
            mastered={25}
            familiar={2}
          />
          <CreateButton />
        </div>
      </div>
    </div>
  );
};
