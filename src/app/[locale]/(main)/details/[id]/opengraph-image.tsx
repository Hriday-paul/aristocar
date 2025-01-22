import UseGetCarDetails from '@/Hooks/UseGetCarDetails'
import { ImageResponse } from 'next/og'
import { carDetailsI } from './@cardetails/page'

export const runtime = 'edge'

// Image metadata
export const alt = 'About Car'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const { data } = (await UseGetCarDetails(id)) as { data: { car: carDetailsI } }

  const carName = data?.car?.name || 'Car Name'
  const carDetails = data?.car?.details || 'Car details are unavailable.'
  const carImage = data?.car?.images?.[0]?.url || 'https://via.placeholder.com/1200x630?text=No+Image'

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Image */}
        <img
          src={carImage}
          alt={carName}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            zIndex: -1,
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
            zIndex: 1,
          }}
        />

        {/* Text Content */}
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            width: '90%',
            textAlign: 'center',
            color: '#ffffff',
            zIndex: 2,
          }}
        >
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
            {carName}
          </h1>
          <p style={{ fontSize: '20px', lineHeight: '1.5', marginBottom: '24px' }}>
            {carDetails}
          </p>
          <a
            href={process.env.MY_DOMAIN + `/details/${id}`}
            style={{
              fontSize: '16px',
              color: '#4ca1ff',
              textDecoration: 'none',
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
