import { ReactComponent as ProjectLogo } from '../../assets/project_logo.svg';
import './styles.css';

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <div className='header-container'>
      <div className='logo'>
        <a href="/"><ProjectLogo /></a>
      </div>
      <p>{title}</p>
      <div />
    </div>
  );
}
