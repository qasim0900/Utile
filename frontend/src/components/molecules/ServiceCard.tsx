import React from 'react'
import clsx from 'clsx'
import { Card, Badge } from '@components/atoms'

export interface ServiceCardProps {
  id: string
  title: string
  description: string
  price: number
  image?: string
  rating?: number
  reviews?: number
  category?: string
  onClick?: (id: string) => void
  className?: string
}

/**
 * ServiceCard Component
 *
 * Displays a single service or product with image, rating, and price.
 * Compound molecule combining atoms for service listings.
 *
 * @example
 * ```tsx
 * <ServiceCard
 *   id="cleaning-1"
 *   title="Professional House Cleaning"
 *   description="Complete house cleaning service..."
 *   price={49.99}
 *   rating={4.5}
 *   reviews={120}
 *   category="Cleaning"
 * />
 * ```
 */
export const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  (
    {
      id,
      title,
      description,
      price,
      image,
      rating = 0,
      reviews = 0,
      category,
      onClick,
      className = '',
    },
    ref,
  ) => {
    const handleClick = () => onClick?.(id)

    return (
      <Card
        ref={ref}
        className={clsx('cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2', className)}
        onClick={handleClick}
      >
        {/* Image */}
        {image && (
          <div className="relative w-full h-48 bg-neutral-200 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
            {category && (
              <Badge variant="primary" size="sm" className="absolute top-3 right-3">
                {category}
              </Badge>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-neutral-900 mb-2 truncate">{title}</h3>
          <p className="text-sm text-neutral-600 mb-4 line-clamp-2">{description}</p>

          {/* Rating */}
          {rating > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < Math.floor(rating) ? '★' : '☆'}</span>
                ))}
              </div>
              <span className="text-sm text-neutral-600">
                {rating.toFixed(1)} ({reviews} reviews)
              </span>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-cyan-500">${price.toFixed(2)}</span>
            <button className="px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition-all duration-200">
              Book Now
            </button>
          </div>
        </div>
      </Card>
    )
  },
)

ServiceCard.displayName = 'ServiceCard'
