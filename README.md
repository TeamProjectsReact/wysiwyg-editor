# wysiwyg-editor

## About Package

- This is the `what you see is what you get` editor for ReactJS Development
- This is the Basic of this Editor
- The Features will added in Future Releases

## How to use this Package

- install package via 

``` sh

    npm i js-wysiwyg-editor

```

- go to location you want to use this Editor
- in ReactJS 
- - import Package

``` jsx

import {Editor} from 'js-wysiwyg-editor'

```

- - Now set the place that you want to use this packge

``` jsx
import React, { useState } from 'react'
import { Editor } from 'js-wysiwyg-editor'
const TestingPack = () => {

  const [text, setText] = useState('');

  return (
    <div className='my-8 mx-12'>
        <div className="">
            <Editor dataValue={text} OutputTest={setText}/>
        </div>
        <div className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm">
            <div dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />
        </div>
    </div>
  )
}

export default TestingPack

```

- if you are using this with forms
- follow the following exmple

``` jsx
import React, { useEffect, useState } from 'react'
import { Editor } from 'js-wysiwyg-editor'
import axios from 'axios'

const TestingPack = () => {
  // send backend
  const [EditorData, SetEditorData] = useState({
    title: '',
  })

  const [text, setText] = useState('');

  // headleSubmit

  const headleSubmit = async (e) => {
    e.preventDefault()

    try{
      const res = await axios.post('http://localhost:8081/AddEditorData', {EditorData, text})
      .then(res => {
        if(res.data.Status === "Success"){
          alert("Editor Data Added Successful")
          window.location.reload()
        }
        else{
          alert(res.data.Error)
        }
      })
    }
    catch (err) {
      console.log(err)   
    }
  }

  const [GetData, SetGetData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8081/DisplayData')
    .then(res => SetGetData(res.data.Result))
    .catch(err => console.log(err))
  }, [])

  

  return (
    <div className='my-8 mx-12'>
          <form onSubmit={headleSubmit}>
            <input type="text" name="" id="" className='h-12 bg-gray-200 rounded'
            onChange={e => SetEditorData({...EditorData, title:e.target.value})}/>
          

            <div className="">
              <Editor dataValue={text} OutputTest={setText}/>
            </div>


            <button type="submit" className="py-2 px-8 bg-blue-500 text-white rounded">Submit</button>
          </form>


        <div className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm">
          <div dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />
        </div>
        
       <div className="my-8">
          <div className="bg-gray-200 rounded py-2 px4">
            {
              GetData.map((Data, index) => {
                return (
                  <div className="">
                    <h1 className="">{Data.editor_title}</h1>
                    <p className="">
                    <div dangerouslySetInnerHTML={{ __html: Data.editor_data.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default TestingPack

```

- set the `onChange={}` and ` value={}` according to your need


## Releases

### v1.0.0 - 30 May 2024

- initial Release
- adding
- - Bold
- - italic
- - underLine

### v1.0.1 - 31 May 2024

- 2nd Version
- Updating errors
- - fixing editor data sending to backend





## Releases History

| Version | Release Date |
|------|-----|
| v1.0.0 | 30 May 2024|
| v1.0.1 | 31 May 2024|


## Developers and Designers

- [JehanKandy](https://github.com/BackendExpert)
- [Anupa Gamage](https://github.com/Anupa1998)

