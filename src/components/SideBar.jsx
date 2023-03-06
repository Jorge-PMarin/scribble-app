import Category from './Category';

export default function SideBar() {
  const categories = [
    'Sci-fi',
    'Fantasy',
    'Action-adventure',
    'Fiction',
    'Non-fiction',
    'Romance',
    'Suspense',
    'Horror/Paranormal',
    'Mystery',
    'Adults',
    'Children',
    'Historical',
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__categories">
        <h2 className="sidebar__categories__title">Find stories by genre</h2>
        <ul className="sidebar__categories__list">
          {
            categories.map(genre => <Category category={genre} key={genre}/>)
          }
        </ul>
      </div>
    </aside>
  );
}
