function NavButton({ name, setActiveTab, activeTab, children }) {
    return (
      <button 
        className={`nav-button ${activeTab === name ? 'active' : ''}`} 
        onClick={() => setActiveTab(name)}
      >
        {children}
      </button>
    );
  }
  
  export default NavButton;
  