import React, { useState, useEffect } from 'react'
function useOnMount(fn) {
  useEffect(() => fn(), [])
}

function useOnUnMount(fn) {
  useEffect(() => {
    return () => {
      fn()
    }
  }, [])
}

function useLifecycleHooks({ onMount, onUnMount }) {
  useEffect(() => {
    onMount()
    return () => {
      onUnMount()
    }
  }, [])
}

function OnMount() {
  useOnMount(() => {
    console.log('hello world')
  })
  useOnUnMount(() => {
    console.log('goodbye world')
  })
  return <div>show mount</div>
}
export default OnMount
