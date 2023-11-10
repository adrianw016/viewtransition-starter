import React, { useEffect } from 'react'
import { flushSync } from 'react-dom'
import { useNavigate } from 'react-router-dom'

let route: string = '/foo'
let navigate = useNavigate()

useEffect(() => {
    startViewTransition(() => {
        flushSync(() => {
            navigate(route)
        })
    })
}, [route])


function startViewTransition(callback: () => void) {
    if (!document.startViewTransition) {
        callback()
    }
    document.startViewTransition(callback)
}
