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
- change as following 

``` jsx
<div>
    <Editor onChange={} value={}/>
</div>

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

