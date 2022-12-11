import PropTypes from 'prop-types';
import {
  ProfileDiv,
  ProfileDescribtion,
  ProfileImage,
  ProfileText,
  StatsList,
  StatsItem,
  StatsSpanText,
  StatsSpanNumber,
  ProfileName,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  // const { username, tag, location, avatar } = props;
  // const {followers, views, likes} = props.stats;

  return (
    <ProfileDiv>
      <ProfileDescribtion>
        <ProfileImage
          src={avatar}
          alt="User picture"
          widht={150}
          height={150}
        />
        <ProfileName>{username}</ProfileName>
        <ProfileText>{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </ProfileDescribtion>

      <StatsList>
        <StatsItem>
          <StatsSpanText>Followers</StatsSpanText>
          <StatsSpanNumber>{followers}</StatsSpanNumber>
        </StatsItem>
        <StatsItem>
          <StatsSpanText>Views</StatsSpanText>
          <StatsSpanNumber>{views}</StatsSpanNumber>
        </StatsItem>
        <StatsItem>
          <StatsSpanText>Likes</StatsSpanText>
          <StatsSpanNumber>{likes}</StatsSpanNumber>
        </StatsItem>
      </StatsList>
    </ProfileDiv>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
