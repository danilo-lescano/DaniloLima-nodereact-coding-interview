import React, { FC } from 'react';
import { IUserProps } from '../../dtos/user.dto';
import { Box, Card, Typography, Avatar } from '@material-ui/core';

export const UserCard: React.FC<IUserProps> = (props: IUserProps) => {
  return (
    <Card
      style={{
        display: 'inline-flex',
        margin: '12px',
        width: '350px',
        height: '140px',
      }}
    >
      <Box
        style={{
          display: 'flex',
          width: '100%',
          backgroundColor: '#dedede',
        }}
      >
        <Typography
          style={{
            fontSize: 12,
            whiteSpace: 'nowrap',
            padding: '12px',
            marginRight: '30px',
          }}
        >
          ID: {props.id}
        </Typography>

        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar
            src={props.avatar}
            alt={props.first_name}
            style={{ border: '2px solid #cccccc' }}
          />
        </Box>
        <Box p={2}>
          <Typography variant="h5" style={{ overflowWrap: 'break-word' }}>
            {props.first_name}
          </Typography>
          <Typography variant="h5" style={{ overflowWrap: 'break-word' }}>
            {props.last_name}
          </Typography>
          <Typography style={{ fontSize: '12px' }}>
            {props.title || 'Works'} at {props.company}
          </Typography>
          <Typography style={{ fontSize: '8px' }}>{props.email}</Typography>
        </Box>
      </Box>
    </Card>
  );
};
