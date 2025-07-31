
 const fetchProfileData = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/gabrielfari4/js-developer-portfolio/refs/heads/projeto-base/data/profile.json')
        const data = await response.json()
         return data   
    } catch (error) {
        console.error(error)
    }
 }
