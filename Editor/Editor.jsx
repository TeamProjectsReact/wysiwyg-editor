import React, { useRef, useState } from 'react'

const Editor = ({ dataValue, OutputTest }) => {
    const textareaRef = useRef(null);

    // headle the bold
    const handleBold = () => {
      const textarea = textareaRef.current; // get the current selected area in textarea
      const start = textarea.selectionStart; //html textarea input in javascript property (selectionStart) => when user select some charaters in textarea the (selectionStart) is the starting point of the selection
      const end = textarea.selectionEnd; //html textarea input in javascript property (selectionEnd) => when user select some charaters in textarea the (selectionStart) is the ending point of the selection
  
      if (start === end) return; // No text is selected
  
      const before = dataValue.substring(0, start); // get the before string in selection start
      const selected = dataValue.substring(start, end); // get the selected text
      const after = dataValue.substring(end); // last sting of the selection
  
      const newText = `${before}**${selected}**${after}`; // ** use this for bold text
      OutputTest(newText);
    };


    //     // headle the handleItalic
    // const handleItalic  = () => {
    //   const textarea = textareaRef.current; // get the current selected area in textarea
    //   const start = textarea.selectionStart; //html textarea input in javascript property (selectionStart) => when user select some charaters in textarea the (selectionStart) is the starting point of the selection
    //   const end = textarea.selectionEnd; //html textarea input in javascript property (selectionEnd) => when user select some charaters in textarea the (selectionStart) is the ending point of the selection
  
    //   if (start === end) return; // No text is selected
  
    //   const before = dataValue.substring(0, start); // get the before string in selection start
    //   const selected = dataValue.substring(start, end); // get the selected text
    //   const after = dataValue.substring(end); // last sting of the selection
  
    //   const newText = `${before}<i>${selected}</i>${after}`; // ** use this for bold text
    //   OutputTest(newText);
    // };


    // // headle the handleItalic
    // const handleUnderLine  = () => {
    //   const textarea = textareaRef.current; // get the current selected area in textarea
    //   const start = textarea.selectionStart; //html textarea input in javascript property (selectionStart) => when user select some charaters in textarea the (selectionStart) is the starting point of the selection
    //   const end = textarea.selectionEnd; //html textarea input in javascript property (selectionEnd) => when user select some charaters in textarea the (selectionStart) is the ending point of the selection
  
    //   if (start === end) return; // No text is selected
  
    //   const before = dataValue.substring(0, start); // get the before string in selection start
    //   const selected = dataValue.substring(start, end); // get the selected text
    //   const after = dataValue.substring(end); // last sting of the selection
  
    //   const newText = `${before}<u>${selected}</u>${after}`; // ** use this for bold text
    //   OutputTest(newText);
    // };


  return (
        <div className="h-auto bg-gray-100 p-4">
           <div className="flex mb-4">
            <button
              className="p-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleBold}
            >
              Bold
            </button>
            {/* <button
              className="mx-4 p-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleItalic}
            >
              Italic
            </button>
            <button
              className="mx-4 p-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleUnderLine}
            >
              Underline
            </button> */}
          </div>
          <textarea
            ref={textareaRef}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            rows="20"
            placeholder="Type something here..."
            value={dataValue}
            onChange={(e) => OutputTest(e.target.value)}
          ></textarea>
        </div>
  )
}

export default Editor