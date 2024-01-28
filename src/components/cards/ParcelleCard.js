import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// Import the CSS file
import './parcellecard.css';

function ParcelleCard({ post, index }) {
  const { cover, title, view, comment, share, author, createdAt } = post;

  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  const renderAvatar = (
    <Avatar
      alt={author.name}
      src={author.avatarUrl}
      className={`avatar ${latestPostLarge || latestPost ? 'avatar-large' : ''}`}
    />
  );

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      className={`title ${latestPostLarge && 'title-large'}`}
    >
      {title}
    </Link>
  );

  const renderInfo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1.5}
      justifyContent="flex-end"
      className="info"
    >
      {[
        { number: comment, icon: 'eva:message-circle-fill' },
        { number: view, icon: 'eva:eye-fill' },
        { number: share, icon: 'eva:share-fill' },
      ].map((info, _index) => (
        <Stack
          key={_index}
          direction="row"
          className={`info-item ${latestPostLarge || latestPost ? 'info-item-large' : ''}`}
        >
          <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
          <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
        </Stack>
      ))}
    </Stack>
  );

  const renderCover = (
    <Box
      component="img"
      alt={title}
      src={cover}
      className={`cover ${latestPostLarge || latestPost ? 'cover-large' : ''}`}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      className={`date ${latestPostLarge || latestPost ? 'date-large' : ''}`}
    >
      {fDate(createdAt)}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      color="paper"
      src="/assets/icons/shape-avatar.svg"
      className={`shape ${latestPostLarge || latestPost ? 'shape-large' : ''}`}
    />
  );

  return (
    <Grid xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Box className={`post-card ${latestPostLarge || latestPost ? 'post-card-large' : ''}`}>
        {renderShape}

        {renderAvatar}

        {renderCover}

        <Box className="post-card-content">
          {renderDate}

          {renderTitle}

          {renderInfo}
        </Box>
      </Box>
    </Grid>
  );
}

ParcelleCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default ParcelleCard;