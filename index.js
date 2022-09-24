document.addEventListener('DOMContentLoaded', () => {

    //greet with name and ask for bank info
    document.querySelector('form').addEventListener('submit', event => {
      event.preventDefault()

      //taking in name submission
      const lnode = document.querySelector('input#lname')
      const lastname = lnode.value
      const fnode = document.querySelector('input#fname')
      const firstname = fnode.value
      const newSpan = document.createElement('span')

    //asking for bank info
    newSpan.textContent = `Hello there my fine ${firstname} ${lastname}. Would you please tell me your bank information?`
    const newForm = document.createElement('form')
    newForm.append("Your banking establishment:")
    const newInput = document.createElement('input')
    const newButton = document.createElement('button')
    newButton.append("Continue")
    document.body.appendChild(newSpan)
    document.body.appendChild(newForm)
    document.body.appendChild(newInput)
    document.body.appendChild(newButton)

    //accept bank info and push cybersecurity lesson
    document.querySelector('button').addEventListener('click', event => {
        event.preventDefault()
        
        //publish link
        const newLink = document.createElement('a')
        newLink.setAttribute('href', "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        const linkText = document.createTextNode("Please click here for short video to learn about cybersecurity and why you should not give bank info to sketchy websites!")
        newLink.appendChild(linkText)
        document.body.appendChild(newLink)
    
        })

    })

        

})