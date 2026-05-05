"use client";
import React, { useState } from "react";
import "./AllFilter.css";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Catogry from "../Catogry/Catogry";
import PriceRange from "../PriceRange/PriceRange";
import Sorting from "../Sorting/Sorting";
import { Col, Row } from "react-bootstrap";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
function AllFilter({ prodect }) {
  const [SearchValue, setSearchValue] = useState("");

  const AllCatogry = ["semua", ...new Set(prodect.map((e) => e.catogry))];
  const [CatogryValue, setCatogryValue] = useState("semua");

  const prices = prodect.map((e) => parseFloat(e.price));
  const MinPrice = Math.min(...prices);
  const MaxPrice = Math.max(...prices);
  const [PriceValue, setPriceValue] = useState(0);

  const [SortValue, setSortValue] = useState("");

  const filtertion = prodect
    .filter((item) => {
      const searchFilter =
        SearchValue === ""
          ? item
          : item.name.toLowerCase().includes(SearchValue.toLowerCase());
      const btnFilter =
        CatogryValue === "semua" ? item : item.catogry === CatogryValue;
      const range =
        PriceValue === 0 ? item : parseFloat(item.price) >= PriceValue;
      return searchFilter && btnFilter && range;
    })
    .slice()
    .sort((a, b) => {
      if (SortValue === "asc") return parseFloat(a.price) - parseFloat(b.price);
      if (SortValue === "desc")
        return parseFloat(b.price) - parseFloat(a.price);
      if (SortValue === "alpha") return a.name.localeCompare(b.name);

      return 0;
    });

  return (
    <div className="AllFilter">
      <HeadingTitle cover="Menu Kami" title="Menu Pilihan" />

      <Row>
        <Col sm="12" lg="3">
          <Search setSearchValue={setSearchValue} />
        </Col>

        <Col sm="12" lg="5">
          <Catogry AllCatogry={AllCatogry} setCatogryValue={setCatogryValue} />
        </Col>

        <Col sm="12" lg="2">
          <PriceRange
            MinPrice={MinPrice}
            MaxPrice={MaxPrice}
            setPriceValue={setPriceValue}
            PriceValue={PriceValue}
          />
        </Col>

        <Col sm="12" lg="2">
          <Sorting setSortValue={setSortValue} />
        </Col>
      </Row>

      <Row>
        {filtertion.map((item) => {
          return (
            <Col key={item.id} sm="12" lg="6">
              <Card item={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default AllFilter;
