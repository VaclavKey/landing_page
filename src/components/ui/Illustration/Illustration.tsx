import type { IllustrationProps } from '../../../types/ui/basic'

export const Illustration = (props: IllustrationProps) => {
  return (
    <div style={{ maxWidth: props.maxWidth + 'px' }}>
      <img 
        className={props.className}
        style={{ width: '100%' }} 
        src={props.src} 
        alt={props.alt} 
      />
    </div>
  )
}
