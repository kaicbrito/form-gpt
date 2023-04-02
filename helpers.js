const listPeoples = () => {
  const peoples = localStorage.getItem("peoples")
  if (peoples) {
    return JSON.parse(peoples)
  }

  return []
}

const addPeople = (people) => {
  const oldPeoples = listPeoples()

  const newPeoples = [...oldPeoples, people]

  localStorage.setItem("peoples", JSON.stringify(newPeoples))
  return newPeoples
}