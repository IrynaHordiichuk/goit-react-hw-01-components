
import { ProfileDiv, ProfileDescribtion, ProfileImage, ProfileText, StatsList, StatsItem, StatsSpanText, StatsSpanNumber, ProfileName } from './Profile.styled';

export const Profile = (props) => {
    const { username, tag, location, avatar } = props;
    const {followers, views, likes} = props.stats;

return (
<ProfileDiv>
  <ProfileDescribtion>
    <ProfileImage src={avatar} size="300px"/>
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