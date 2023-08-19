// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {images, setActiveThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = images
  const onUpdate = () => {
    setActiveThumbnail(id)
  }
  return (
    <li>
      <button type="button" onClick={onUpdate}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}
export default ThumbnailItem
