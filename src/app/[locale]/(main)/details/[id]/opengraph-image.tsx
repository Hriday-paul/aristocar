import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'About Car'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src='https://aristocar.vercel.app/home/sec1_car.png' alt='car image' className='h-full w-full' />
        About Acme
      </div>
    ),
    {
      ...size
    }
  )
}