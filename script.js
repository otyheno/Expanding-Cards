const panels = document.querySelectorAll('.panel')
//console.log(panels);
panels.forEach((panel)=>{

    function removeActiveClasses(){
        panels.forEach((panel)=>{
            panel.classList.remove('active')
        })
    }

    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})


