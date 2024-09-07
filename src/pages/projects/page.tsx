import AppLayout from '@/layouts/AppLayout';
import ListProjectsView from '@/views/projects/ListProjectsView';

export default function ProjectsPage() {
  return (
    <AppLayout>
      <ListProjectsView />
    </AppLayout>
  );
}
