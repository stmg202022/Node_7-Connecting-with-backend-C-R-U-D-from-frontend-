import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AiOutlineStar } from "react-icons/ai";

const ProductCard = ({ ...props }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = props;

  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: "30px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              sx={{
                background: "#ff000087",
                borderRadius: "20px",
                padding: "5px",
              }}
            >
              -{discountPercentage}%
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          sx={{ height: 140, background: "#ffcdd2" }}
          image={images[0]}
          title="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Price: Rs.{price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            <AiOutlineStar />
            {rating}
          </Typography>
          <CardActions>
            <Button size="small">
              Buy{" "}
              <span>
                <b>+</b>
              </span>
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
