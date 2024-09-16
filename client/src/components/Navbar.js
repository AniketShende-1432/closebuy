import '../index.css';

const Navbar = ({ mainCategories, onMainCategoryClick, selectedMainCategory }) => {

  
  const scrollToCategory = (id) => {
    const categoryElement = document.getElementById(id);
    if (categoryElement) {
      let attempts = 0;
      const maxAttempts = 10; 
      const interval = 100; 

      const scrollInterval = setInterval(() => {
        categoryElement.scrollIntoView({ behavior: 'smooth' , block: 'start',
        inline: 'nearest'});
        attempts += 1;

        if (attempts >= maxAttempts) {
          clearInterval(scrollInterval);
        }

        const rect = categoryElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          clearInterval(scrollInterval);
        }
      }, interval);
    }
  };

  return (
    <div className="navbar">
      <div className="categories-container">
        {mainCategories.map(category => (
          <div
            key={category.id}
            id={`category-${category.id}`}
            className={`category-item ${category.id === selectedMainCategory ? 'active' : ''}`}
            onClick={() => {
              onMainCategoryClick(category.id);
              scrollToCategory(`category-${category.id}`);
            }}
          >
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
