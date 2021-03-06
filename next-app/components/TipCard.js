import moment from 'moment'
import { ethers } from 'ethers'
import { shortenAddress } from '../utils/shortenAddress'
import { copyAddress } from '../utils/copyAddress'
import Avatar from './Avatar'

const TipCard = ({ tip }) => {
  return (
    <div className='flex flex-row bg-base-100 rounded-box gap-4 p-4'>
      <Avatar address={tip.sender} size={40} />

      <div className='flex flex-col w-full'>
        <div className='flex flex-row justify-between mb-1'>
          <div>
            <span className='text-sm font-semibold mr-2'>
              {tip.name ? tip.name : 'Tipper'}
            </span>
            <span className='bg-green-50 border border-green-500 rounded-md text-xs text-green-500 font-semibold p-1'>
              Ξ{ethers.utils.formatEther(tip.amount)}
            </span>
          </div>
          <div className='flex items-center text-2xs text-gray-400 font-light gap-2'>
            {moment(tip.timestamp * 1000).fromNow()}
            <a href={`https://etherscan.io/tx/${tip.txHash}`} target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={1}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div
            className='text-2xs cursor-pointer tooltip'
            data-tip='Copy to clipboard'
            onClick={() => {
              copyAddress(tip.sender)
            }}
          >
            <span className='bg-base-200 rounded-md text-2xs text-gray-400 font-mono py-1 px-2'>
              {shortenAddress(tip.sender)}
            </span>
          </div>
        </div>
        {tip.message && <div className='font-medium mt-4'>{tip.message}</div>}
      </div>
    </div>
  )
}

export default TipCard
