window.onload=function(){
    const darkmode = document.querySelector('#DM');
    const darkmode_sm = document.querySelector('#dm');
    const base = document.querySelector('html')
    
    darkmode.addEventListener("click", () => toggleDarkMode() );
    darkmode_sm.addEventListener("click", () => toggleDarkMode() );
    
    const toggleDarkMode = () => {
        base.classList.toggle('dark');
    }
  }
