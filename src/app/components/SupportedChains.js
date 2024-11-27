import React from 'react'
import ChainList from './ChainList'

const SupportedChains = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent'>Supported Chains</h1>
        <ChainList />
    </div>
  )
}

export default SupportedChains
