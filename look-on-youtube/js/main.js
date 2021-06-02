chrome.contextMenus.create({
  "title": "Search this on YouTube",
  "contexts": ["selection"],
  "onclick": openResults()
})

function openResults() {
  return function (info, tab) {
    const searchTerm = info.selectionText
    const url = `https://www.youtube.com/results?search_query=${formatQuery(searchTerm)}`
    
    chrome.tabs.create({
      index: tab.index + 1,
      url,
      selected: true,
    })
  }
}

function formatQuery(term) {
  const newTerm = term.replace(' ', '+').replace('"', '')

  return newTerm
}