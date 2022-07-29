import { AvatarImage } from "./Avatar.styled";
import defaultAvatar from "../../../images/default_superhero.jpg";
import { BASE_URL, IMAGES } from "../../../config";

const Avatar = ({ superhero }) => {
    const {images, nickname} = superhero;
    const DEFAULT_IMAGE = images.length === 0;
    const AVATAR_USER = images.length !== 0;
    
    return(
        <div>
            {DEFAULT_IMAGE && (
                <AvatarImage
                src={`${defaultAvatar}`}
                alt={`${nickname}_default`}
                />
            )}
            {AVATAR_USER && (
                <AvatarImage
                src={`${BASE_URL}/${IMAGES}/${images[0].id}.${images[0].extension}`}
                alt={nickname}
                />
            )}
        </div>
    )
}

export default Avatar