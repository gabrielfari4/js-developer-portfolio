
const updateProfileInfo = (profileData) => {
    const photo = document.getElementById("profile-photo")
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById("profile-name")
    name.innerText = profileData.name

    const job = document.getElementById("profile-job")
    job.innerText = profileData.job

    const location = document.getElementById("profile-location")
    location.innerText = profileData.location

    const phone = document.getElementById("profile-phone")
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById("profile-email")
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

const updateSoftSkills = (profileData) => {
    const softSkills = document.getElementById("profile-skills-softSkills")
    const items = profileData.skills.softSkills.map((skill) => {
        return `<li>${skill}</li>`
    })
    softSkills.innerHTML = items.join('')
}

const updateHardSkills = (profileData) => {
    const hardSkills = document.querySelector(".tools")
    const items = profileData.skills.hardSkills.map((skill) => {
        return `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"/></li>`
    })
    hardSkills.querySelector("ul").innerHTML = items.join('')
}

const updateLanguages = (profileData) => {
    const languages = document.querySelector(".languages")
    const items = profileData.languages.map((lang) => {
        return `<li>${lang}</li>`
    })
    
    console.log(items)
    languages.innerHTML = items.join('')
}

const updatePortfolio = (profileData) => {
    const portfolio = document.querySelector(".portfolio")
    const items = profileData.portfolio.map((item) => {
        return `<li><h3 class="title github">${item.name}</h3><a href="${item.url}" target="_blank">${item.url}</a></li>`
    })

    portfolio.innerHTML = items.join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
})()
