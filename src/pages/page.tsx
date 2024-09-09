import AppLayout from '@/layouts/AppLayout';
import EducationView from '@/views/home/EducationView';
import HeroHomeView from '@/views/home/HeroHomeView';
import JobsHomeView from '@/views/home/JobsHomeView';
import StackHomeView from '@/views/home/StackHomeView';

export default function HomePage() {
  return (
    <AppLayout>
      <HeroHomeView />
      <JobsHomeView />
      <StackHomeView />
      <EducationView />
    </AppLayout>
  );
}
