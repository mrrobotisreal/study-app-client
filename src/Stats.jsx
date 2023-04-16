import { useState, useEffect } from 'react';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import LineChart from "@cloudscape-design/components/line-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Table from '@cloudscape-design/components/table';
import Tabs from '@cloudscape-design/components/tabs';
import { FormattedMessage } from 'react-intl';

export default () => {
  const [mwFlashStudy, setMwFlashStudy] = useState([
    {x: new Date(2022, 8, 1), y: 20},
    {x: new Date(2022, 8, 2), y: 2},
    {x: new Date(2022, 8, 3), y: 6},
    {x: new Date(2022, 8, 4), y: 5},
    {x: new Date(2022, 8, 5), y: 17},
    {x: new Date(2022, 8, 11), y: 7},
    {x: new Date(2022, 8, 12), y: 3},
    {x: new Date(2022, 8, 13), y: 2},
    {x: new Date(2022, 8, 14), y: 24},
    {x: new Date(2022, 8, 15), y: 4},
    {x: new Date(2022, 8, 16), y: 12},
    {x: new Date(2022, 8, 17), y: 9},
    {x: new Date(2022, 8, 18), y: 6},
    {x: new Date(2022, 8, 22), y: 17},
    {x: new Date(2022, 8, 23), y: 22},
    {x: new Date(2022, 8, 24), y: 17},
    {x: new Date(2022, 8, 25), y: 11},
    {x: new Date(2022, 8, 26), y: 21},
    {x: new Date(2022, 8, 27), y: 11},
    {x: new Date(2022, 8, 28), y: 7},
    {x: new Date(2022, 8, 29), y: 24},
    {x: new Date(2022, 8, 30), y: 16},
    {x: new Date(2022, 9, 1), y: 20},
    {x: new Date(2022, 9, 2), y: 2},
    {x: new Date(2022, 9, 3), y: 6},
    {x: new Date(2022, 9, 4), y: 5},
    {x: new Date(2022, 9, 7), y: 9},
    {x: new Date(2022, 9, 8), y: 11},
    {x: new Date(2022, 9, 9), y: 16},
    {x: new Date(2022, 9, 10), y: 13},
    {x: new Date(2022, 9, 11), y: 7},
    {x: new Date(2022, 9, 12), y: 3},
    {x: new Date(2022, 9, 16), y: 12},
    {x: new Date(2022, 9, 17), y: 9},
    {x: new Date(2022, 9, 18), y: 6},
    {x: new Date(2022, 9, 19), y: 25},
    {x: new Date(2022, 9, 20), y: 8},
    {x: new Date(2022, 9, 21), y: 13},
    {x: new Date(2022, 9, 22), y: 17},
    {x: new Date(2022, 9, 23), y: 22},
    {x: new Date(2022, 9, 24), y: 17},
    {x: new Date(2022, 9, 31), y: 10},
    {x: new Date(2022, 10, 1), y: 22},
    {x: new Date(2022, 10, 2), y: 1},
    {x: new Date(2022, 10, 3), y: 5},
    {x: new Date(2022, 10, 4), y: 18},
    {x: new Date(2022, 10, 5), y: 23},
    {x: new Date(2022, 10, 6), y: 23},
    {x: new Date(2022, 10, 7), y: 15},
    {x: new Date(2022, 10, 8), y: 22},
    {x: new Date(2022, 10, 16), y: 7},
    {x: new Date(2022, 10, 17), y: 2},
    {x: new Date(2022, 10, 18), y: 23},
    {x: new Date(2022, 10, 19), y: 11},
    {x: new Date(2022, 10, 20), y: 20},
    {x: new Date(2022, 10, 21), y: 9},
    {x: new Date(2022, 10, 24), y: 25},
    {x: new Date(2022, 10, 25), y: 3},
    {x: new Date(2022, 10, 26), y: 6},
    {x: new Date(2022, 10, 29), y: 0},
    {x: new Date(2022, 10, 30), y: 20},
    {x: new Date(2022, 11, 1), y: 9},
    {x: new Date(2022, 11, 2), y: 9},
    {x: new Date(2022, 11, 3), y: 22},
    {x: new Date(2022, 11, 4), y: 12},
    {x: new Date(2022, 11, 13), y: 23},
    {x: new Date(2022, 11, 14), y: 22},
    {x: new Date(2022, 11, 15), y: 4},
    {x: new Date(2022, 11, 16), y: 6},
    {x: new Date(2022, 11, 17), y: 19},
    {x: new Date(2022, 11, 18), y: 9},
    {x: new Date(2022, 11, 19), y: 2},
    {x: new Date(2022, 11, 20), y: 7},
    {x: new Date(2022, 11, 21), y: 22},
    {x: new Date(2022, 11, 31), y: 25},
    {x: new Date(2023, 0, 1), y: 3},
    {x: new Date(2023, 0, 2), y: 12},
    {x: new Date(2023, 0, 3), y: 9},
    {x: new Date(2023, 0, 19), y: 10},
    {x: new Date(2023, 0, 20), y: 5},
    {x: new Date(2023, 0, 21), y: 2},
    {x: new Date(2023, 0, 22), y: 12},
    {x: new Date(2023, 0, 23), y: 18},
    {x: new Date(2023, 0, 30), y: 10},
    {x: new Date(2023, 0, 31), y: 9},
    {x: new Date(2023, 1, 1), y: 3},
    {x: new Date(2023, 1, 2), y: 20},
    {x: new Date(2023, 1, 3), y: 2},
    {x: new Date(2023, 1, 4), y: 20},
    {x: new Date(2023, 1, 5), y: 9},
    {x: new Date(2023, 1, 6), y: 25},
    {x: new Date(2023, 1, 7), y: 17},
    {x: new Date(2023, 1, 8), y: 17},
    {x: new Date(2023, 1, 9), y: 8},
    {x: new Date(2023, 1, 10), y: 17},
    {x: new Date(2023, 1, 15), y: 12},
    {x: new Date(2023, 1, 16), y: 23},
    {x: new Date(2023, 1, 17), y: 24},
    {x: new Date(2023, 1, 18), y: 13},
    {x: new Date(2023, 1, 19), y: 21},
    {x: new Date(2023, 1, 26), y: 20},
    {x: new Date(2023, 1, 27), y: 15},
    {x: new Date(2023, 1, 28), y: 22},
  ]);
  const [mwFlashEasy, setMwFlashEasy] = useState([
    {x: new Date(2022, 8, 1), y: 21},
    {x: new Date(2022, 8, 2), y: 10},
    {x: new Date(2022, 8, 3), y: 15},
    {x: new Date(2022, 8, 4), y: 18},
    {x: new Date(2022, 8, 5), y: 3},
    {x: new Date(2022, 8, 11), y: 16},
    {x: new Date(2022, 8, 12), y: 21},
    {x: new Date(2022, 8, 13), y: 7},
    {x: new Date(2022, 8, 14), y: 2},
    {x: new Date(2022, 8, 15), y: 18},
    {x: new Date(2022, 8, 16), y: 1},
    {x: new Date(2022, 8, 17), y: 22},
    {x: new Date(2022, 8, 18), y: 11},
    {x: new Date(2022, 8, 22), y: 6},
    {x: new Date(2022, 8, 23), y: 24},
    {x: new Date(2022, 8, 24), y: 6},
    {x: new Date(2022, 8, 25), y: 5},
    {x: new Date(2022, 8, 26), y: 22},
    {x: new Date(2022, 8, 27), y: 7},
    {x: new Date(2022, 8, 28), y: 2},
    {x: new Date(2022, 8, 29), y: 11},
    {x: new Date(2022, 8, 30), y: 14},
    {x: new Date(2022, 9, 1), y: 21},
    {x: new Date(2022, 9, 2), y: 10},
    {x: new Date(2022, 9, 3), y: 15},
    {x: new Date(2022, 9, 4), y: 18},
    {x: new Date(2022, 9, 7), y: 18},
    {x: new Date(2022, 9, 8), y: 15},
    {x: new Date(2022, 9, 9), y: 9},
    {x: new Date(2022, 9, 10), y: 15},
    {x: new Date(2022, 9, 11), y: 16},
    {x: new Date(2022, 9, 12), y: 21},
    {x: new Date(2022, 9, 16), y: 1},
    {x: new Date(2022, 9, 17), y: 22},
    {x: new Date(2022, 9, 18), y: 11},
    {x: new Date(2022, 9, 19), y: 10},
    {x: new Date(2022, 9, 20), y: 1},
    {x: new Date(2022, 9, 21), y: 8},
    {x: new Date(2022, 9, 22), y: 6},
    {x: new Date(2022, 9, 23), y: 24},
    {x: new Date(2022, 9, 24), y: 6},
    {x: new Date(2022, 9, 31), y: 8},
    {x: new Date(2022, 10, 1), y: 15},
    {x: new Date(2022, 10, 2), y: 12},
    {x: new Date(2022, 10, 3), y: 19},
    {x: new Date(2022, 10, 4), y: 7},
    {x: new Date(2022, 10, 5), y: 25},
    {x: new Date(2022, 10, 6), y: 13},
    {x: new Date(2022, 10, 7), y: 4},
    {x: new Date(2022, 10, 8), y: 23},
    {x: new Date(2022, 10, 16), y: 17},
    {x: new Date(2022, 10, 17), y: 3},
    {x: new Date(2022, 10, 18), y: 7},
    {x: new Date(2022, 10, 19), y: 4},
    {x: new Date(2022, 10, 20), y: 10},
    {x: new Date(2022, 10, 21), y: 10},
    {x: new Date(2022, 10, 24), y: 2},
    {x: new Date(2022, 10, 25), y: 4},
    {x: new Date(2022, 10, 26), y: 8},
    {x: new Date(2022, 10, 29), y: 14},
    {x: new Date(2022, 10, 30), y: 20},
    {x: new Date(2022, 11, 1), y: 3},
    {x: new Date(2022, 11, 2), y: 4},
    {x: new Date(2022, 11, 3), y: 7},
    {x: new Date(2022, 11, 4), y: 3},
    {x: new Date(2022, 11, 13), y: 10},
    {x: new Date(2022, 11, 14), y: 9},
    {x: new Date(2022, 11, 15), y: 19},
    {x: new Date(2022, 11, 16), y: 23},
    {x: new Date(2022, 11, 17), y: 15},
    {x: new Date(2022, 11, 18), y: 7},
    {x: new Date(2022, 11, 19), y: 12},
    {x: new Date(2022, 11, 20), y: 22},
    {x: new Date(2022, 11, 21), y: 1},
    {x: new Date(2022, 11, 31), y: 19},
    {x: new Date(2023, 0, 1), y: 5},
    {x: new Date(2023, 0, 2), y: 16},
    {x: new Date(2023, 0, 3), y: 2},
    {x: new Date(2023, 0, 19), y: 22},
    {x: new Date(2023, 0, 20), y: 4},
    {x: new Date(2023, 0, 21), y: 6},
    {x: new Date(2023, 0, 22), y: 4},
    {x: new Date(2023, 0, 23), y: 11},
    {x: new Date(2023, 0, 30), y: 15},
    {x: new Date(2023, 0, 31), y: 24},
    {x: new Date(2023, 1, 1), y: 11},
    {x: new Date(2023, 1, 2), y: 16},
    {x: new Date(2023, 1, 3), y: 23},
    {x: new Date(2023, 1, 4), y: 16},
    {x: new Date(2023, 1, 5), y: 19},
    {x: new Date(2023, 1, 6), y: 18},
    {x: new Date(2023, 1, 7), y: 15},
    {x: new Date(2023, 1, 8), y: 19},
    {x: new Date(2023, 1, 9), y: 18},
    {x: new Date(2023, 1, 10), y: 21},
    {x: new Date(2023, 1, 15), y: 14},
    {x: new Date(2023, 1, 16), y: 20},
    {x: new Date(2023, 1, 17), y: 15},
    {x: new Date(2023, 1, 18), y: 12},
    {x: new Date(2023, 1, 19), y: 22},
    {x: new Date(2023, 1, 26), y: 0},
    {x: new Date(2023, 1, 27), y: 4},
    {x: new Date(2023, 1, 28), y: 5},
  ]);
  const [mwFlashDifficult, setMwFlashDifficult] = useState([
    {x: new Date(2022, 8, 1), y: 23},
    {x: new Date(2022, 8, 2), y: 5},
    {x: new Date(2022, 8, 3), y: 5},
    {x: new Date(2022, 8, 4), y: 7},
    {x: new Date(2022, 8, 5), y: 15},
    {x: new Date(2022, 8, 11), y: 7},
    {x: new Date(2022, 8, 12), y: 21},
    {x: new Date(2022, 8, 13), y: 21},
    {x: new Date(2022, 8, 14), y: 22},
    {x: new Date(2022, 8, 15), y: 19},
    {x: new Date(2022, 8, 16), y: 24},
    {x: new Date(2022, 8, 17), y: 10},
    {x: new Date(2022, 8, 18), y: 18},
    {x: new Date(2022, 8, 22), y: 14},
    {x: new Date(2022, 8, 23), y: 19},
    {x: new Date(2022, 8, 24), y: 17},
    {x: new Date(2022, 8, 25), y: 24},
    {x: new Date(2022, 8, 26), y: 8},
    {x: new Date(2022, 8, 27), y: 19},
    {x: new Date(2022, 8, 28), y: 18},
    {x: new Date(2022, 8, 29), y: 20},
    {x: new Date(2022, 8, 30), y: 13},
    {x: new Date(2022, 9, 1), y: 23},
    {x: new Date(2022, 9, 2), y: 5},
    {x: new Date(2022, 9, 3), y: 5},
    {x: new Date(2022, 9, 4), y: 7},
    {x: new Date(2022, 9, 7), y: 10},
    {x: new Date(2022, 9, 8), y: 22},
    {x: new Date(2022, 9, 9), y: 16},
    {x: new Date(2022, 9, 10), y: 8},
    {x: new Date(2022, 9, 11), y: 7},
    {x: new Date(2022, 9, 12), y: 21},
    {x: new Date(2022, 9, 16), y: 24},
    {x: new Date(2022, 9, 17), y: 10},
    {x: new Date(2022, 9, 18), y: 18},
    {x: new Date(2022, 9, 19), y: 14},
    {x: new Date(2022, 9, 20), y: 20},
    {x: new Date(2022, 9, 21), y: 19},
    {x: new Date(2022, 9, 22), y: 14},
    {x: new Date(2022, 9, 23), y: 19},
    {x: new Date(2022, 9, 24), y: 17},
    {x: new Date(2022, 9, 31), y: 22},
    {x: new Date(2022, 10, 1), y: 10},
    {x: new Date(2022, 10, 2), y: 7},
    {x: new Date(2022, 10, 3), y: 17},
    {x: new Date(2022, 10, 4), y: 18},
    {x: new Date(2022, 10, 5), y: 12},
    {x: new Date(2022, 10, 6), y: 4},
    {x: new Date(2022, 10, 7), y: 2},
    {x: new Date(2022, 10, 8), y: 20},
    {x: new Date(2022, 10, 16), y: 15},
    {x: new Date(2022, 10, 17), y: 15},
    {x: new Date(2022, 10, 18), y: 24},
    {x: new Date(2022, 10, 19), y: 8},
    {x: new Date(2022, 10, 20), y: 20},
    {x: new Date(2022, 10, 21), y: 12},
    {x: new Date(2022, 10, 24), y: 15},
    {x: new Date(2022, 10, 25), y: 10},
    {x: new Date(2022, 10, 26), y: 19},
    {x: new Date(2022, 10, 29), y: 23},
    {x: new Date(2022, 10, 30), y: 1},
    {x: new Date(2022, 11, 1), y: 1},
    {x: new Date(2022, 11, 2), y: 5},
    {x: new Date(2022, 11, 3), y: 19},
    {x: new Date(2022, 11, 4), y: 4},
    {x: new Date(2022, 11, 13), y: 7},
    {x: new Date(2022, 11, 14), y: 20},
    {x: new Date(2022, 11, 15), y: 10},
    {x: new Date(2022, 11, 16), y: 5},
    {x: new Date(2022, 11, 17), y: 24},
    {x: new Date(2022, 11, 18), y: 6},
    {x: new Date(2022, 11, 19), y: 2},
    {x: new Date(2022, 11, 20), y: 18},
    {x: new Date(2022, 11, 21), y: 11},
    {x: new Date(2022, 11, 31), y: 1},
    {x: new Date(2023, 0, 1), y: 10},
    {x: new Date(2023, 0, 2), y: 16},
    {x: new Date(2023, 0, 3), y: 13},
    {x: new Date(2023, 0, 19), y: 22},
    {x: new Date(2023, 0, 20), y: 4},
    {x: new Date(2023, 0, 21), y: 10},
    {x: new Date(2023, 0, 22), y: 6},
    {x: new Date(2023, 0, 23), y: 9},
    {x: new Date(2023, 0, 30), y: 4},
    {x: new Date(2023, 0, 31), y: 20},
    {x: new Date(2023, 1, 1), y: 23},
    {x: new Date(2023, 1, 2), y: 23},
    {x: new Date(2023, 1, 3), y: 23},
    {x: new Date(2023, 1, 4), y: 24},
    {x: new Date(2023, 1, 5), y: 9},
    {x: new Date(2023, 1, 6), y: 6},
    {x: new Date(2023, 1, 7), y: 13},
    {x: new Date(2023, 1, 8), y: 12},
    {x: new Date(2023, 1, 9), y: 2},
    {x: new Date(2023, 1, 10), y: 17},
    {x: new Date(2023, 1, 15), y: 2},
    {x: new Date(2023, 1, 16), y: 5},
    {x: new Date(2023, 1, 17), y: 0},
    {x: new Date(2023, 1, 18), y: 11},
    {x: new Date(2023, 1, 19), y: 22},
    {x: new Date(2023, 1, 26), y: 9},
    {x: new Date(2023, 1, 27), y: 10},
    {x: new Date(2023, 1, 28), y: 4},
  ]);
  const [mwGames, setMwGames] = useState([
    {x: new Date(2022, 8, 1), y: 4},
    {x: new Date(2022, 8, 2), y: 13},
    {x: new Date(2022, 8, 3), y: 9},
    {x: new Date(2022, 8, 4), y: 24},
    {x: new Date(2022, 8, 5), y: 14},
    {x: new Date(2022, 8, 11), y: 23},
    {x: new Date(2022, 8, 12), y: 20},
    {x: new Date(2022, 8, 13), y: 16},
    {x: new Date(2022, 8, 14), y: 23},
    {x: new Date(2022, 8, 15), y: 3},
    {x: new Date(2022, 8, 16), y: 5},
    {x: new Date(2022, 8, 17), y: 3},
    {x: new Date(2022, 8, 18), y: 16},
    {x: new Date(2022, 8, 22), y: 5},
    {x: new Date(2022, 8, 23), y: 18},
    {x: new Date(2022, 8, 24), y: 25},
    {x: new Date(2022, 8, 25), y: 23},
    {x: new Date(2022, 8, 26), y: 15},
    {x: new Date(2022, 8, 27), y: 13},
    {x: new Date(2022, 8, 28), y: 0},
    {x: new Date(2022, 8, 29), y: 16},
    {x: new Date(2022, 8, 30), y: 22},
    {x: new Date(2022, 9, 1), y: 4},
    {x: new Date(2022, 9, 2), y: 13},
    {x: new Date(2022, 9, 3), y: 9},
    {x: new Date(2022, 9, 4), y: 24},
    {x: new Date(2022, 9, 7), y: 7},
    {x: new Date(2022, 9, 8), y: 3},
    {x: new Date(2022, 9, 9), y: 13},
    {x: new Date(2022, 9, 10), y: 14},
    {x: new Date(2022, 9, 11), y: 23},
    {x: new Date(2022, 9, 12), y: 20},
    {x: new Date(2022, 9, 16), y: 5},
    {x: new Date(2022, 9, 17), y: 3},
    {x: new Date(2022, 9, 18), y: 16},
    {x: new Date(2022, 9, 19), y: 2},
    {x: new Date(2022, 9, 20), y: 21},
    {x: new Date(2022, 9, 21), y: 24},
    {x: new Date(2022, 9, 22), y: 5},
    {x: new Date(2022, 9, 23), y: 18},
    {x: new Date(2022, 9, 24), y: 25},
    {x: new Date(2022, 9, 31), y: 8},
    {x: new Date(2022, 10, 1), y: 25},
    {x: new Date(2022, 10, 2), y: 2},
    {x: new Date(2022, 10, 3), y: 4},
    {x: new Date(2022, 10, 4), y: 12},
    {x: new Date(2022, 10, 5), y: 2},
    {x: new Date(2022, 10, 6), y: 2},
    {x: new Date(2022, 10, 7), y: 24},
    {x: new Date(2022, 10, 8), y: 8},
    {x: new Date(2022, 10, 16), y: 19},
    {x: new Date(2022, 10, 17), y: 3},
    {x: new Date(2022, 10, 18), y: 18},
    {x: new Date(2022, 10, 19), y: 23},
    {x: new Date(2022, 10, 20), y: 5},
    {x: new Date(2022, 10, 21), y: 11},
    {x: new Date(2022, 10, 24), y: 9},
    {x: new Date(2022, 10, 25), y: 21},
    {x: new Date(2022, 10, 26), y: 24},
    {x: new Date(2022, 10, 29), y: 16},
    {x: new Date(2022, 10, 30), y: 3},
    {x: new Date(2022, 11, 1), y: 15},
    {x: new Date(2022, 11, 2), y: 9},
    {x: new Date(2022, 11, 3), y: 23},
    {x: new Date(2022, 11, 4), y: 9},
    {x: new Date(2022, 11, 13), y: 22},
    {x: new Date(2022, 11, 14), y: 20},
    {x: new Date(2022, 11, 15), y: 7},
    {x: new Date(2022, 11, 16), y: 22},
    {x: new Date(2022, 11, 17), y: 24},
    {x: new Date(2022, 11, 18), y: 13},
    {x: new Date(2022, 11, 19), y: 10},
    {x: new Date(2022, 11, 20), y: 19},
    {x: new Date(2022, 11, 21), y: 6},
    {x: new Date(2022, 11, 31), y: 11},
    {x: new Date(2023, 0, 1), y: 18},
    {x: new Date(2023, 0, 2), y: 3},
    {x: new Date(2023, 0, 3), y: 19},
    {x: new Date(2023, 0, 19), y: 18},
    {x: new Date(2023, 0, 20), y: 17},
    {x: new Date(2023, 0, 21), y: 0},
    {x: new Date(2023, 0, 22), y: 10},
    {x: new Date(2023, 0, 23), y: 25},
    {x: new Date(2023, 0, 30), y: 14},
    {x: new Date(2023, 0, 31), y: 17},
    {x: new Date(2023, 1, 1), y: 6},
    {x: new Date(2023, 1, 2), y: 1},
    {x: new Date(2023, 1, 3), y: 20},
    {x: new Date(2023, 1, 4), y: 25},
    {x: new Date(2023, 1, 5), y: 11},
    {x: new Date(2023, 1, 6), y: 22},
    {x: new Date(2023, 1, 7), y: 21},
    {x: new Date(2023, 1, 8), y: 9},
    {x: new Date(2023, 1, 9), y: 9},
    {x: new Date(2023, 1, 10), y: 13},
    {x: new Date(2023, 1, 15), y: 9},
    {x: new Date(2023, 1, 16), y: 6},
    {x: new Date(2023, 1, 17), y: 5},
    {x: new Date(2023, 1, 18), y: 3},
    {x: new Date(2023, 1, 19), y: 11},
    {x: new Date(2023, 1, 26), y: 6},
    {x: new Date(2023, 1, 27), y: 6},
    {x: new Date(2023, 1, 28), y: 4},
  ]);
  const [mwFlashStudyAverage, setMwFlashStudyAverage] = useState([]);
  const [mwFlashEasyAverage, setMwFlashEasyAverage] = useState([]);
  const [mwFlashDifficultAverage, setMwFlashDifficultAverage] = useState([]);
  const [mwGamesAverage, setMwGamesAverage] = useState([]);
  const [mwFlashStudyHighest, setMwFlashStudyHighest] = useState([]);
  const [mwFlashEasyHighest, setMwFlashEasyHighest] = useState([]);
  const [mwFlashDifficultHighest, setMwFlashDifficultHighest] = useState([]);
  const [mwGamesHighest, setMwGamesHighest] = useState([]);
  //
  const [mwFlashStudyRussian, setMwFlashStudyRussian] = useState([
    {x: new Date(2022, 8, 1), y: 2},
    {x: new Date(2022, 8, 2), y: 22},
    {x: new Date(2022, 8, 3), y: 4},
    {x: new Date(2022, 8, 4), y: 11},
    {x: new Date(2022, 8, 5), y: 8},
    {x: new Date(2022, 8, 11), y: 2},
    {x: new Date(2022, 8, 12), y: 5},
    {x: new Date(2022, 8, 13), y: 19},
    {x: new Date(2022, 8, 14), y: 22},
    {x: new Date(2022, 8, 15), y: 9},
    {x: new Date(2022, 8, 16), y: 19},
    {x: new Date(2022, 8, 17), y: 3},
    {x: new Date(2022, 8, 18), y: 2},
    {x: new Date(2022, 8, 22), y: 23},
    {x: new Date(2022, 8, 23), y: 1},
    {x: new Date(2022, 8, 24), y: 2},
    {x: new Date(2022, 8, 25), y: 25},
    {x: new Date(2022, 8, 26), y: 2},
    {x: new Date(2022, 8, 27), y: 22},
    {x: new Date(2022, 8, 28), y: 23},
    {x: new Date(2022, 8, 29), y: 11},
    {x: new Date(2022, 8, 30), y: 5},
    {x: new Date(2022, 9, 1), y: 2},
    {x: new Date(2022, 9, 2), y: 22},
    {x: new Date(2022, 9, 3), y: 4},
    {x: new Date(2022, 9, 4), y: 11},
    {x: new Date(2022, 9, 7), y: 11},
    {x: new Date(2022, 9, 8), y: 17},
    {x: new Date(2022, 9, 9), y: 8},
    {x: new Date(2022, 9, 10), y: 8},
    {x: new Date(2022, 9, 11), y: 2},
    {x: new Date(2022, 9, 12), y: 5},
    {x: new Date(2022, 9, 16), y: 19},
    {x: new Date(2022, 9, 17), y: 3},
    {x: new Date(2022, 9, 18), y: 2},
    {x: new Date(2022, 9, 19), y: 14},
    {x: new Date(2022, 9, 20), y: 4},
    {x: new Date(2022, 9, 21), y: 18},
    {x: new Date(2022, 9, 22), y: 23},
    {x: new Date(2022, 9, 23), y: 1},
    {x: new Date(2022, 9, 24), y: 2},
    {x: new Date(2022, 9, 31), y: 8},
    {x: new Date(2022, 10, 1), y: 13},
    {x: new Date(2022, 10, 2), y: 12},
    {x: new Date(2022, 10, 3), y: 2},
    {x: new Date(2022, 10, 4), y: 17},
    {x: new Date(2022, 10, 5), y: 20},
    {x: new Date(2022, 10, 6), y: 18},
    {x: new Date(2022, 10, 7), y: 11},
    {x: new Date(2022, 10, 8), y: 10},
    {x: new Date(2022, 10, 16), y: 14},
    {x: new Date(2022, 10, 17), y: 12},
    {x: new Date(2022, 10, 18), y: 10},
    {x: new Date(2022, 10, 19), y: 1},
    {x: new Date(2022, 10, 20), y: 10},
    {x: new Date(2022, 10, 21), y: 7},
    {x: new Date(2022, 10, 24), y: 21},
    {x: new Date(2022, 10, 25), y: 4},
    {x: new Date(2022, 10, 26), y: 21},
    {x: new Date(2022, 10, 29), y: 3},
    {x: new Date(2022, 10, 30), y: 24},
    {x: new Date(2022, 11, 1), y: 22},
    {x: new Date(2022, 11, 2), y: 3},
    {x: new Date(2022, 11, 3), y: 10},
    {x: new Date(2022, 11, 4), y: 21},
    {x: new Date(2022, 11, 13), y: 17},
    {x: new Date(2022, 11, 14), y: 10},
    {x: new Date(2022, 11, 15), y: 3},
    {x: new Date(2022, 11, 16), y: 8},
    {x: new Date(2022, 11, 17), y: 15},
    {x: new Date(2022, 11, 18), y: 16},
    {x: new Date(2022, 11, 19), y: 17},
    {x: new Date(2022, 11, 20), y: 22},
    {x: new Date(2022, 11, 21), y: 14},
    {x: new Date(2022, 11, 31), y: 2},
    {x: new Date(2023, 0, 1), y: 3},
    {x: new Date(2023, 0, 2), y: 20},
    {x: new Date(2023, 0, 3), y: 8},
    {x: new Date(2023, 0, 19), y: 16},
    {x: new Date(2023, 0, 20), y: 7},
    {x: new Date(2023, 0, 21), y: 8},
    {x: new Date(2023, 0, 22), y: 3},
    {x: new Date(2023, 0, 23), y: 1},
    {x: new Date(2023, 0, 30), y: 14},
    {x: new Date(2023, 0, 31), y: 10},
    {x: new Date(2023, 1, 1), y: 5},
    {x: new Date(2023, 1, 2), y: 18},
    {x: new Date(2023, 1, 3), y: 16},
    {x: new Date(2023, 1, 4), y: 12},
    {x: new Date(2023, 1, 5), y: 3},
    {x: new Date(2023, 1, 6), y: 10},
    {x: new Date(2023, 1, 7), y: 23},
    {x: new Date(2023, 1, 8), y: 5},
    {x: new Date(2023, 1, 9), y: 8},
    {x: new Date(2023, 1, 10), y: 14},
    {x: new Date(2023, 1, 15), y: 17},
    {x: new Date(2023, 1, 16), y: 3},
    {x: new Date(2023, 1, 17), y: 7},
    {x: new Date(2023, 1, 18), y: 6},
    {x: new Date(2023, 1, 19), y: 12},
    {x: new Date(2023, 1, 26), y: 3},
    {x: new Date(2023, 1, 27), y: 15},
    {x: new Date(2023, 1, 28), y: 10},
  ]);
  const [mwFlashEasyRussian, setMwFlashEasyRussian] = useState([
    {x: new Date(2022, 8, 1), y: 12},
    {x: new Date(2022, 8, 2), y: 7},
    {x: new Date(2022, 8, 3), y: 23},
    {x: new Date(2022, 8, 4), y: 13},
    {x: new Date(2022, 8, 5), y: 23},
    {x: new Date(2022, 8, 11), y: 7},
    {x: new Date(2022, 8, 12), y: 0},
    {x: new Date(2022, 8, 13), y: 15},
    {x: new Date(2022, 8, 14), y: 10},
    {x: new Date(2022, 8, 15), y: 16},
    {x: new Date(2022, 8, 16), y: 2},
    {x: new Date(2022, 8, 17), y: 5},
    {x: new Date(2022, 8, 18), y: 6},
    {x: new Date(2022, 8, 22), y: 22},
    {x: new Date(2022, 8, 23), y: 13},
    {x: new Date(2022, 8, 24), y: 7},
    {x: new Date(2022, 8, 25), y: 4},
    {x: new Date(2022, 8, 26), y: 16},
    {x: new Date(2022, 8, 27), y: 0},
    {x: new Date(2022, 8, 28), y: 19},
    {x: new Date(2022, 8, 29), y: 17},
    {x: new Date(2022, 8, 30), y: 15},
    {x: new Date(2022, 9, 1), y: 12},
    {x: new Date(2022, 9, 2), y: 7},
    {x: new Date(2022, 9, 3), y: 23},
    {x: new Date(2022, 9, 4), y: 13},
    {x: new Date(2022, 9, 7), y: 1},
    {x: new Date(2022, 9, 8), y: 1},
    {x: new Date(2022, 9, 9), y: 20},
    {x: new Date(2022, 9, 10), y: 7},
    {x: new Date(2022, 9, 11), y: 7},
    {x: new Date(2022, 9, 12), y: 0},
    {x: new Date(2022, 9, 16), y: 2},
    {x: new Date(2022, 9, 17), y: 5},
    {x: new Date(2022, 9, 18), y: 6},
    {x: new Date(2022, 9, 19), y: 2},
    {x: new Date(2022, 9, 20), y: 22},
    {x: new Date(2022, 9, 21), y: 14},
    {x: new Date(2022, 9, 22), y: 22},
    {x: new Date(2022, 9, 23), y: 13},
    {x: new Date(2022, 9, 24), y: 7},
    {x: new Date(2022, 9, 31), y: 12},
    {x: new Date(2022, 10, 1), y: 13},
    {x: new Date(2022, 10, 2), y: 19},
    {x: new Date(2022, 10, 3), y: 11},
    {x: new Date(2022, 10, 4), y: 22},
    {x: new Date(2022, 10, 5), y: 17},
    {x: new Date(2022, 10, 6), y: 9},
    {x: new Date(2022, 10, 7), y: 13},
    {x: new Date(2022, 10, 8), y: 25},
    {x: new Date(2022, 10, 16), y: 14},
    {x: new Date(2022, 10, 17), y: 13},
    {x: new Date(2022, 10, 18), y: 24},
    {x: new Date(2022, 10, 19), y: 7},
    {x: new Date(2022, 10, 20), y: 12},
    {x: new Date(2022, 10, 21), y: 16},
    {x: new Date(2022, 10, 24), y: 24},
    {x: new Date(2022, 10, 25), y: 18},
    {x: new Date(2022, 10, 26), y: 14},
    {x: new Date(2022, 10, 29), y: 11},
    {x: new Date(2022, 10, 30), y: 20},
    {x: new Date(2022, 11, 1), y: 20},
    {x: new Date(2022, 11, 2), y: 4},
    {x: new Date(2022, 11, 3), y: 10},
    {x: new Date(2022, 11, 4), y: 23},
    {x: new Date(2022, 11, 13), y: 15},
    {x: new Date(2022, 11, 14), y: 6},
    {x: new Date(2022, 11, 15), y: 24},
    {x: new Date(2022, 11, 16), y: 1},
    {x: new Date(2022, 11, 17), y: 20},
    {x: new Date(2022, 11, 18), y: 8},
    {x: new Date(2022, 11, 19), y: 21},
    {x: new Date(2022, 11, 20), y: 4},
    {x: new Date(2022, 11, 21), y: 22},
    {x: new Date(2022, 11, 31), y: 18},
    {x: new Date(2023, 0, 1), y: 21},
    {x: new Date(2023, 0, 2), y: 20},
    {x: new Date(2023, 0, 3), y: 15},
    {x: new Date(2023, 0, 19), y: 20},
    {x: new Date(2023, 0, 20), y: 24},
    {x: new Date(2023, 0, 21), y: 24},
    {x: new Date(2023, 0, 22), y: 2},
    {x: new Date(2023, 0, 23), y: 12},
    {x: new Date(2023, 0, 30), y: 20},
    {x: new Date(2023, 0, 31), y: 22},
    {x: new Date(2023, 1, 1), y: 3},
    {x: new Date(2023, 1, 2), y: 17},
    {x: new Date(2023, 1, 3), y: 12},
    {x: new Date(2023, 1, 4), y: 23},
    {x: new Date(2023, 1, 5), y: 1},
    {x: new Date(2023, 1, 6), y: 8},
    {x: new Date(2023, 1, 7), y: 7},
    {x: new Date(2023, 1, 8), y: 8},
    {x: new Date(2023, 1, 9), y: 8},
    {x: new Date(2023, 1, 10), y: 6},
    {x: new Date(2023, 1, 15), y: 24},
    {x: new Date(2023, 1, 16), y: 24},
    {x: new Date(2023, 1, 17), y: 16},
    {x: new Date(2023, 1, 18), y: 24},
    {x: new Date(2023, 1, 19), y: 15},
    {x: new Date(2023, 1, 26), y: 22},
    {x: new Date(2023, 1, 27), y: 11},
    {x: new Date(2023, 1, 28), y: 21},
  ]);
  const [mwFlashDifficultRussian, setMwFlashDifficultRussian] = useState([
    {x: new Date(2022, 8, 1), y: 11},
    {x: new Date(2022, 8, 2), y: 17},
    {x: new Date(2022, 8, 3), y: 2},
    {x: new Date(2022, 8, 4), y: 19},
    {x: new Date(2022, 8, 5), y: 2},
    {x: new Date(2022, 8, 11), y: 11},
    {x: new Date(2022, 8, 12), y: 7},
    {x: new Date(2022, 8, 13), y: 0},
    {x: new Date(2022, 8, 14), y: 7},
    {x: new Date(2022, 8, 15), y: 21},
    {x: new Date(2022, 8, 16), y: 19},
    {x: new Date(2022, 8, 17), y: 15},
    {x: new Date(2022, 8, 18), y: 23},
    {x: new Date(2022, 8, 22), y: 18},
    {x: new Date(2022, 8, 23), y: 16},
    {x: new Date(2022, 8, 24), y: 18},
    {x: new Date(2022, 8, 25), y: 20},
    {x: new Date(2022, 8, 26), y: 21},
    {x: new Date(2022, 8, 27), y: 5},
    {x: new Date(2022, 8, 28), y: 22},
    {x: new Date(2022, 8, 29), y: 3},
    {x: new Date(2022, 8, 30), y: 23},
    {x: new Date(2022, 9, 1), y: 11},
    {x: new Date(2022, 9, 2), y: 17},
    {x: new Date(2022, 9, 3), y: 2},
    {x: new Date(2022, 9, 4), y: 19},
    {x: new Date(2022, 9, 7), y: 6},
    {x: new Date(2022, 9, 8), y: 18},
    {x: new Date(2022, 9, 9), y: 23},
    {x: new Date(2022, 9, 10), y: 0},
    {x: new Date(2022, 9, 11), y: 11},
    {x: new Date(2022, 9, 12), y: 7},
    {x: new Date(2022, 9, 16), y: 19},
    {x: new Date(2022, 9, 17), y: 15},
    {x: new Date(2022, 9, 18), y: 23},
    {x: new Date(2022, 9, 19), y: 24},
    {x: new Date(2022, 9, 20), y: 16},
    {x: new Date(2022, 9, 21), y: 19},
    {x: new Date(2022, 9, 22), y: 18},
    {x: new Date(2022, 9, 23), y: 16},
    {x: new Date(2022, 9, 24), y: 18},
    {x: new Date(2022, 9, 31), y: 7},
    {x: new Date(2022, 10, 1), y: 18},
    {x: new Date(2022, 10, 2), y: 3},
    {x: new Date(2022, 10, 3), y: 12},
    {x: new Date(2022, 10, 4), y: 12},
    {x: new Date(2022, 10, 5), y: 17},
    {x: new Date(2022, 10, 6), y: 17},
    {x: new Date(2022, 10, 7), y: 21},
    {x: new Date(2022, 10, 8), y: 6},
    {x: new Date(2022, 10, 16), y: 2},
    {x: new Date(2022, 10, 17), y: 2},
    {x: new Date(2022, 10, 18), y: 17},
    {x: new Date(2022, 10, 19), y: 16},
    {x: new Date(2022, 10, 20), y: 20},
    {x: new Date(2022, 10, 21), y: 2},
    {x: new Date(2022, 10, 24), y: 11},
    {x: new Date(2022, 10, 25), y: 15},
    {x: new Date(2022, 10, 26), y: 12},
    {x: new Date(2022, 10, 29), y: 16},
    {x: new Date(2022, 10, 30), y: 14},
    {x: new Date(2022, 11, 1), y: 6},
    {x: new Date(2022, 11, 2), y: 15},
    {x: new Date(2022, 11, 3), y: 1},
    {x: new Date(2022, 11, 4), y: 14},
    {x: new Date(2022, 11, 13), y: 12},
    {x: new Date(2022, 11, 14), y: 22},
    {x: new Date(2022, 11, 15), y: 7},
    {x: new Date(2022, 11, 16), y: 8},
    {x: new Date(2022, 11, 17), y: 1},
    {x: new Date(2022, 11, 18), y: 22},
    {x: new Date(2022, 11, 19), y: 2},
    {x: new Date(2022, 11, 20), y: 9},
    {x: new Date(2022, 11, 21), y: 10},
    {x: new Date(2022, 11, 31), y: 9},
    {x: new Date(2023, 0, 1), y: 14},
    {x: new Date(2023, 0, 2), y: 6},
    {x: new Date(2023, 0, 3), y: 13},
    {x: new Date(2023, 0, 19), y: 21},
    {x: new Date(2023, 0, 20), y: 14},
    {x: new Date(2023, 0, 21), y: 25},
    {x: new Date(2023, 0, 22), y: 0},
    {x: new Date(2023, 0, 23), y: 10},
    {x: new Date(2023, 0, 30), y: 14},
    {x: new Date(2023, 0, 31), y: 6},
    {x: new Date(2023, 1, 1), y: 21},
    {x: new Date(2023, 1, 2), y: 5},
    {x: new Date(2023, 1, 3), y: 11},
    {x: new Date(2023, 1, 4), y: 7},
    {x: new Date(2023, 1, 5), y: 0},
    {x: new Date(2023, 1, 6), y: 3},
    {x: new Date(2023, 1, 7), y: 25},
    {x: new Date(2023, 1, 8), y: 24},
    {x: new Date(2023, 1, 9), y: 1},
    {x: new Date(2023, 1, 10), y: 4},
    {x: new Date(2023, 1, 15), y: 16},
    {x: new Date(2023, 1, 16), y: 6},
    {x: new Date(2023, 1, 17), y: 2},
    {x: new Date(2023, 1, 18), y: 2},
    {x: new Date(2023, 1, 19), y: 20},
    {x: new Date(2023, 1, 26), y: 2},
    {x: new Date(2023, 1, 27), y: 5},
    {x: new Date(2023, 1, 28), y: 10},
  ]);
  const [mwGamesRussian, setMwGamesRussian] = useState([
    {x: new Date(2022, 8, 1), y: 24},
    {x: new Date(2022, 8, 2), y: 6},
    {x: new Date(2022, 8, 3), y: 2},
    {x: new Date(2022, 8, 4), y: 23},
    {x: new Date(2022, 8, 5), y: 25},
    {x: new Date(2022, 8, 11), y: 5},
    {x: new Date(2022, 8, 12), y: 8},
    {x: new Date(2022, 8, 13), y: 18},
    {x: new Date(2022, 8, 14), y: 8},
    {x: new Date(2022, 8, 15), y: 22},
    {x: new Date(2022, 8, 16), y: 9},
    {x: new Date(2022, 8, 17), y: 4},
    {x: new Date(2022, 8, 18), y: 1},
    {x: new Date(2022, 8, 22), y: 5},
    {x: new Date(2022, 8, 23), y: 19},
    {x: new Date(2022, 8, 24), y: 22},
    {x: new Date(2022, 8, 25), y: 1},
    {x: new Date(2022, 8, 26), y: 15},
    {x: new Date(2022, 8, 27), y: 17},
    {x: new Date(2022, 8, 28), y: 12},
    {x: new Date(2022, 8, 29), y: 7},
    {x: new Date(2022, 8, 30), y: 5},
    {x: new Date(2022, 9, 1), y: 24},
    {x: new Date(2022, 9, 2), y: 6},
    {x: new Date(2022, 9, 3), y: 2},
    {x: new Date(2022, 9, 4), y: 23},
    {x: new Date(2022, 9, 7), y: 9},
    {x: new Date(2022, 9, 8), y: 11},
    {x: new Date(2022, 9, 9), y: 11},
    {x: new Date(2022, 9, 10), y: 4},
    {x: new Date(2022, 9, 11), y: 5},
    {x: new Date(2022, 9, 12), y: 8},
    {x: new Date(2022, 9, 16), y: 9},
    {x: new Date(2022, 9, 17), y: 4},
    {x: new Date(2022, 9, 18), y: 1},
    {x: new Date(2022, 9, 19), y: 2},
    {x: new Date(2022, 9, 20), y: 2},
    {x: new Date(2022, 9, 21), y: 17},
    {x: new Date(2022, 9, 22), y: 5},
    {x: new Date(2022, 9, 23), y: 19},
    {x: new Date(2022, 9, 24), y: 22},
    {x: new Date(2022, 9, 31), y: 10},
    {x: new Date(2022, 10, 1), y: 7},
    {x: new Date(2022, 10, 2), y: 11},
    {x: new Date(2022, 10, 3), y: 1},
    {x: new Date(2022, 10, 4), y: 16},
    {x: new Date(2022, 10, 5), y: 10},
    {x: new Date(2022, 10, 6), y: 24},
    {x: new Date(2022, 10, 7), y: 9},
    {x: new Date(2022, 10, 8), y: 13},
    {x: new Date(2022, 10, 16), y: 0},
    {x: new Date(2022, 10, 17), y: 23},
    {x: new Date(2022, 10, 18), y: 14},
    {x: new Date(2022, 10, 19), y: 3},
    {x: new Date(2022, 10, 20), y: 9},
    {x: new Date(2022, 10, 21), y: 17},
    {x: new Date(2022, 10, 24), y: 14},
    {x: new Date(2022, 10, 25), y: 15},
    {x: new Date(2022, 10, 26), y: 7},
    {x: new Date(2022, 10, 29), y: 12},
    {x: new Date(2022, 10, 30), y: 15},
    {x: new Date(2022, 11, 1), y: 1},
    {x: new Date(2022, 11, 2), y: 20},
    {x: new Date(2022, 11, 3), y: 6},
    {x: new Date(2022, 11, 4), y: 21},
    {x: new Date(2022, 11, 13), y: 22},
    {x: new Date(2022, 11, 14), y: 24},
    {x: new Date(2022, 11, 15), y: 13},
    {x: new Date(2022, 11, 16), y: 9},
    {x: new Date(2022, 11, 17), y: 8},
    {x: new Date(2022, 11, 18), y: 7},
    {x: new Date(2022, 11, 19), y: 11},
    {x: new Date(2022, 11, 20), y: 20},
    {x: new Date(2022, 11, 21), y: 18},
    {x: new Date(2022, 11, 31), y: 19},
    {x: new Date(2023, 0, 1), y: 1},
    {x: new Date(2023, 0, 2), y: 13},
    {x: new Date(2023, 0, 3), y: 11},
    {x: new Date(2023, 0, 19), y: 20},
    {x: new Date(2023, 0, 20), y: 14},
    {x: new Date(2023, 0, 21), y: 12},
    {x: new Date(2023, 0, 22), y: 10},
    {x: new Date(2023, 0, 23), y: 5},
    {x: new Date(2023, 0, 30), y: 12},
    {x: new Date(2023, 0, 31), y: 14},
    {x: new Date(2023, 1, 1), y: 16},
    {x: new Date(2023, 1, 2), y: 3},
    {x: new Date(2023, 1, 3), y: 10},
    {x: new Date(2023, 1, 4), y: 11},
    {x: new Date(2023, 1, 5), y: 20},
    {x: new Date(2023, 1, 6), y: 0},
    {x: new Date(2023, 1, 7), y: 6},
    {x: new Date(2023, 1, 8), y: 15},
    {x: new Date(2023, 1, 9), y: 13},
    {x: new Date(2023, 1, 10), y: 10},
    {x: new Date(2023, 1, 15), y: 23},
    {x: new Date(2023, 1, 16), y: 5},
    {x: new Date(2023, 1, 17), y: 13},
    {x: new Date(2023, 1, 18), y: 0},
    {x: new Date(2023, 1, 19), y: 23},
    {x: new Date(2023, 1, 26), y: 21},
    {x: new Date(2023, 1, 27), y: 11},
    {x: new Date(2023, 1, 28), y: 5},
  ]);
  const [mwFlashStudyAverageRussian, setMwFlashStudyAverageRussian] = useState(0);
  const [mwFlashEasyAverageRussian, setMwFlashEasyAverageRussian] = useState(0);
  const [mwFlashDifficultAverageRussian, setMwFlashDifficultAverageRussian] = useState(0);
  const [mwGamesAverageRussian, setMwGamesAverageRussian] = useState(0);
  const [mwFlashStudyHighestRussian, setMwFlashStudyHighestRussian] = useState(0);
  const [mwFlashEasyHighestRussian, setMwFlashEasyHighestRussian] = useState(0);
  const [mwFlashDifficultHighestRussian, setMwFlashDifficultHighestRussian] = useState(0);
  const [mwGamesHighestRussian, setMwGamesHighestRussian] = useState(0);

  const [asFlashStudy, setAsFlashStudy] = useState([]);
  const [asFlashEasy, setAsFlashEasy] = useState([]);
  const [asFlashDifficult, setAsFlashDifficult] = useState([]);
  const [asGames, setAsGames] = useState([]);
  const [asFlashStudyAverage, setAsFlashStudyAverage] = useState(0);
  const [asFlashEasyAverage, setAsFlashEasyAverage] = useState(0);
  const [asFlashDifficultAverage, setAsFlashDifficultAverage] = useState(0);
  const [asGamesAverage, setAsGamesAverage] = useState(0);
  const [asFlashStudyHighest, setAsFlashStudyHighest] = useState(0);
  const [asFlashEasyHighest, setAsFlashEasyHighest] = useState(0);
  const [asFlashDifficultHighest, setAsFlashDifficultHighest] = useState(0);
  const [asGamesHighest, setAsGamesHighest] = useState(0);
  //
  const [asFlashStudyRussian, setAsFlashStudyRussian] = useState([]);
  const [asFlashEasyRussian, setAsFlashEasyRussian] = useState([]);
  const [asFlashDifficultRussian, setAsFlashDifficultRussian] = useState([]);
  const [asGamesRussian, setAsGamesRussian] = useState([]);
  const [asFlashStudyAverageRussian, setAsFlashStudyAverageRussian] = useState(0);
  const [asFlashEasyAverageRussian, setAsFlashEasyAverageRussian] = useState(0);
  const [asFlashDifficultAverageRussian, setAsFlashDifficultAverageRussian] = useState(0);
  const [asGamesAverageRussian, setAsGamesAverageRussian] = useState(0);
  const [asFlashStudyHighestRussian, setAsFlashStudyHighestRussian] = useState(0);
  const [asFlashEasyHighestRussian, setAsFlashEasyHighestRussian] = useState(0);
  const [asFlashDifficultHighestRussian, setAsFlashDifficultHighestRussian] = useState(0);
  const [asGamesHighestRussian, setAsGamesHighestRussian] = useState(0);

  useEffect(() => {
    let list = [mwFlashStudy, mwFlashStudyRussian, mwFlashEasy, mwFlashEasyRussian, mwFlashDifficult, mwFlashDifficultRussian, mwGames, mwGamesRussian];
    let allVietStudyScores = [];
    let vietStudyTotal = 0;
    let vietStudyAvergae = 0;
    let allRussStudyScores = [];
    let russStudyTotal = 0;
    let russStudyAverage = 0;
    //
    let allVietEasyScores = [];
    let vietEasyTotal = 0;
    let vietEasyAverage = 0;
    let allRussEasyScores = [];
    let russEasyTotal = 0;
    let russEasyAverage = 0;
    //
    let allVietDifficultScores = [];
    let vietDifficultTotal = 0;
    let vietDifficultAverage = 0;
    let allRussDifficultScores = [];
    let russDifficultTotal = 0;
    let russDifficultAverage = 0;
    //
    let allVietGamesScores = [];
    let vietGamesTotal = 0;
    let vietGamesAverage = 0;
    let allRussGamesScores = [];
    let russGamesTotal = 0;
    let russGamesAverage = 0;

    for (let i = 0; i < list.length; i++) {
      console.log('BIG LOOP')
      switch (i) {
        case 0:
          for (let j = 0; j < list[i].length; j++) {
            console.log('Inner loop: i = ' + i + '; j = ' + j);
            allVietStudyScores.push(list[i][j].y);
            vietStudyTotal += list[i][j].y;
          }
          break;
        case 1:
          for (let j = 0; j < list[i].length; j++) {
            console.log('Inner loop: i = ' + i + '; j = ' + j);
            allRussStudyScores.push(list[i][j].y);
            russStudyTotal += list[i][j].y;
          }
          break;
        case 2:
          for (let j = 0; j < list[i].length; j++) {
            console.log('Inner loop: i = ' + i + '; j = ' + j);
            allVietEasyScores.push(list[i][j].y);
            vietEasyTotal += list[i][j].y;
          }
          break;
        case 3:
          for (let j = 0; j < list[i].length; j++) {
            console.log('Inner loop: i = ' + i + '; j = ' + j);
            allRussEasyScores.push(list[i][j].y);
            russEasyTotal += list[i][j].y;
          }
          break;
        case 4:
          for (let j = 0; j < list[i].length; j++) {
            console.log('Inner loop: i = ' + i + '; j = ' + j);
            allVietDifficultScores.push(list[i][j].y);
            vietDifficultTotal += list[i][j].y;
          }
          break;
        case 5:
          for (let j = 0; j < list[i].length; j++) {
            console.log('Inner loop: i = ' + i + '; j = ' + j);
            allRussDifficultScores.push(list[i][j].y);
            russDifficultTotal += list[i][j].y;
          }
          break;
        case 6:
          for (let j = 0; j < list[i].length; j++) {
            console.log('Inner loop: i = ' + i + '; j = ' + j);
            allVietGamesScores.push(list[i][j].y);
            vietGamesTotal += list[i][j].y;
          }
          break;
        case 7:
          for (let j = 0; j < list[i].length; j++) {
            console.log('Inner loop: i = ' + i + '; j = ' + j);
            allRussGamesScores.push(list[i][j].y);
            russGamesTotal += list[i][j].y;
          }
          break;
      }
    }
    setMwFlashStudyHighest(Math.max(...allVietStudyScores));
    setMwFlashStudyAverage((allVietStudyScores.reduce((total, val) => total += val, vietStudyTotal) / allVietStudyScores.length).toFixed(2) - 1);
    setMwFlashStudyHighestRussian(Math.max(...allRussStudyScores));
    setMwFlashStudyAverageRussian((allRussStudyScores.reduce((total, val) => total += val, russStudyTotal) / allRussStudyScores.length).toFixed(2) - 1);
    setMwFlashEasyHighest(Math.max(...allVietEasyScores));
    setMwFlashEasyAverage((allVietEasyScores.reduce((total, val) => total += val, vietEasyTotal) / allVietEasyScores.length).toFixed(2) - 1);
    setMwFlashEasyHighestRussian(Math.max(...allRussEasyScores));
    setMwFlashEasyAverageRussian((allRussEasyScores.reduce((total, val) => total += val, russEasyTotal) / allRussEasyScores.length).toFixed(2) - 1);
    setMwFlashDifficultHighest(Math.max(...allVietDifficultScores));
    setMwFlashDifficultAverage((allVietDifficultScores.reduce((total, val) => total += val, vietDifficultTotal) / allVietDifficultScores.length).toFixed(2) - 1);
    setMwFlashDifficultHighestRussian(Math.max(...allRussDifficultScores));
    setMwFlashDifficultAverageRussian((allRussDifficultScores.reduce((total, val) => total += val, russDifficultTotal) / allRussDifficultScores.length).toFixed(2) - 1);
    setMwGamesHighest(Math.max(...allVietGamesScores));
    setMwGamesAverage((allVietGamesScores.reduce((total, val) => total += val, vietGamesTotal) / allVietGamesScores.length).toFixed(2) - 1);
    setMwGamesHighestRussian(Math.max(...allRussGamesScores));
    setMwGamesAverageRussian((allRussGamesScores.reduce((total, val) => total += val, russGamesTotal) / allRussGamesScores.length).toFixed(2) - 1);
  }, []);

  return (
    <>
      <Tabs
        tabs={[
          {
            label: 'Mitchell Wintrow',
            id: 'first',
            content: (
              <>
                <Header
                  variant="h1"
                  description={
                    <FormattedMessage
                      id="stats.header.description"
                      defaultMessage="This is where all of the stats for a student will be displayed. There will be a container for each category, such as Flashcards, and within each container there may be several charts or only one chart. For example, the Flashcards container consists of 3 charts: Study mode, Test mode - Easy, and Test mode - Difficult."
                      description=""
                    />
                  }
                >
                  <FormattedMessage
                    id="stats.header"
                    defaultMessage="Student progress charts"
                    description=""
                  />
                </Header>
                <Container
                  header={
                    <Header
                      variant="h2"
                      description={
                        <FormattedMessage
                          id="stats.flashcards.header.description"
                          defaultMessage={`The 3 charts displayed below are a reflection of how many cards <the student> got correct during Study mode, and of how many questions were answered correctly during both Test modes (Easy; Difficult). These data points are reflected in real time by using a "push" model on the server, which allows server updates to be directly pushed to the website UI, so no need for refreshing!`}
                          description=""
                        />
                      }
                    >
                      <FormattedMessage
                        id="stats.flashcards.header"
                        defaultMessage="Flashcards"
                        description=""
                      />
                    </Header>
                  }
                >
                  <Container
                    header={
                      <Header
                        variant="h3"
                        description={
                          <FormattedMessage
                            id="stats.flashcards.studyMode.header.description"
                            defaultMessage="These are the data points from Study mode flashcard sessions."
                            description=""
                          />
                        }
                        actions={
                          <SpaceBetween direction="horizontal" size="m">
                            <Button
                              variant="primary"
                              onClick={() => console.log('This will open a modal')}
                            >
                              <FormattedMessage
                                id="stats.flashcards.studyMode.header.takeNotesButton"
                                defaultMessage="Take notes"
                                description=""
                              />
                            </Button>
                          </SpaceBetween>
                        }
                      >
                        <FormattedMessage
                          id="stats.flashcards.studyMode.header"
                          defaultMessage="Study mode"
                          description=""
                        />
                      </Header>
                    }
                  >
                    <LineChart
                      series={[
                        {
                          title: "Vietnamese Vocabulary",
                          type: "line",
                          data: mwFlashStudy,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        {
                          title: "Russian Vocabulary",
                          type: "line",
                          data: mwFlashStudyRussian,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        // {
                        //   title: "Hebrew Vocabulary",
                        //   type: "line",
                        //   data: [
                        //     { x: new Date(1601013600000), y: 131023 },
                        //     { x: new Date(1601014500000), y: 164975 },
                        //     { x: new Date(1601015400000), y: 176980 },
                        //     { x: new Date(1601016300000), y: 168052 },
                        //     { x: new Date(1601017200000), y: 149130 },
                        //     { x: new Date(1601018100000), y: 147299 },
                        //     { x: new Date(1601019000000), y: 169552 },
                        //     { x: new Date(1601019900000), y: 163401 },
                        //     { x: new Date(1601020800000), y: 154091 },
                        //     { x: new Date(1601021700000), y: 199516 },
                        //     { x: new Date(1601022600000), y: 195503 },
                        //     { x: new Date(1601023500000), y: 189953 },
                        //     { x: new Date(1601024400000), y: 101635 },
                        //     { x: new Date(1601025300000), y: 192975 },
                        //     { x: new Date(1601026200000), y: 295951 },
                        //     { x: new Date(1601027100000), y: 218958 },
                        //     { x: new Date(1601028000000), y: 220516 },
                        //     { x: new Date(1601028900000), y: 213557 },
                        //     { x: new Date(1601029800000), y: 165899 },
                        //     { x: new Date(1601030700000), y: 373557 },
                        //     { x: new Date(1601031600000), y: 472331 },
                        //     { x: new Date(1601032500000), y: 486492 },
                        //     { x: new Date(1601033400000), y: 331541 },
                        //     { x: new Date(1601034300000), y: 242262 },
                        //     { x: new Date(1601035200000), y: 194091 },
                        //     { x: new Date(1601036100000), y: 185899 },
                        //     { x: new Date(1601037000000), y: 173401 },
                        //     { x: new Date(1601037900000), y: 171635 },
                        //     { x: new Date(1601038800000), y: 100130 },
                        //     { x: new Date(1601039700000), y: 185951 },
                        //     { x: new Date(1601040600000), y: 104091 },
                        //     { x: new Date(1601041500000), y: 152975 },
                        //     { x: new Date(1601042400000), y: 127299 }
                        //   ],
                        //   valueFormatter: function o(e) {
                        //     return Math.abs(e) >= 1e9
                        //       ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //           "G"
                        //       : Math.abs(e) >= 1e6
                        //       ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //         "M"
                        //       : Math.abs(e) >= 1e3
                        //       ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //         "K"
                        //       : e.toFixed(2);
                        //   }
                        // },
                        {
                          title: "Performance goal",
                          type: "threshold",
                          y: 15,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        }
                      ]}
                      xDomain={[
                        new Date(2022, 8, 1),
                        new Date(2023, 2, 1)
                      ]}
                      yDomain={[0, 25]}
                      i18nStrings={{
                        filterLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterLabel"
                            defaultMessage="Filter displayed data"
                            description=""
                          />
                        ),
                        filterPlaceholder: (
                          <FormattedMessage
                            id="stats.tableStrings.filterPlaceholder"
                            defaultMessage="Filter data"
                            description=""
                          />
                        ),
                        filterSelectedAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterSelectedAriaLabel"
                            defaultMessage="selected"
                            description=""
                          />
                        ),
                        detailPopoverDismissAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.detailPopoverDismissAriaLabel"
                            defaultMessage="Dismiss"
                            description=""
                          />
                        ),
                        legendAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.legendAriaLabel"
                            defaultMessage="Legend"
                            description=""
                          />
                        ),
                        chartAriaRoleDescription: (
                          <FormattedMessage
                            id="stats.tableStrings.chartAriaRoleDescription"
                            defaultMessage="line chart"
                            description=""
                          />
                        ),
                        xTickFormatter: e =>
                          e
                            .toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: !1
                            })
                            .split(",")
                            .join("\n"),
                        yTickFormatter: function o(e) {
                          return Math.abs(e) >= 1e9
                            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                                "G"
                            : Math.abs(e) >= 1e6
                            ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                              "M"
                            : Math.abs(e) >= 1e3
                            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                              "K"
                            : e.toFixed(0);
                        }
                      }}
                      ariaLabel="Multiple data series line chart"
                      errorText="Error loading data."
                      height={300}
                      loadingText="Loading chart"
                      recoveryText="Retry"
                      xScaleType="time"
                      xTitle={
                        <FormattedMessage
                          id="stats.flashcards.xTitle"
                          defaultMessage="Time (UTC)"
                          description=""
                        />
                      }
                      yTitle={
                        <FormattedMessage
                          id="stats.flashcards.yTitle"
                          defaultMessage="Correct flashcards"
                          description=""
                        />
                      }
                      empty={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noDataAvailable"
                            defaultMessage="<b>No data available</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.thereIsNoDataAvailable"
                              defaultMessage="There is no data available"
                              description=""
                            />
                          </Box>
                        </Box>
                      }
                      noMatch={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noMatchingData"
                            defaultMessage="<b>No matching data</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>,
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.noMatchingDataToDisplay"
                              defaultMessage="There is no matching data to display"
                              description=""
                            />
                          </Box>
                          <Button>
                            <FormattedMessage
                              id="stats.clearFilter"
                              defaultMessage="Clear filter"
                              description=""
                            />
                          </Button>
                        </Box>
                      }
                    />
                    <hr/>
                    <SpaceBetween direction="horizontal" size="l">
                      <SpaceBetween direction="vertical" size="s">
                        <Header variant="h3">Vietnamese</Header>
                        <Box variant="awsui-key-label">
                          <FormattedMessage
                            id="stats.flashcards.highestScore"
                            defaultMessage="Highest score"
                            description=""
                          />
                        </Box>
                        <Box variant="p">{mwFlashStudyHighest}</Box>
                        <Box variant="awsui-key-label">
                          <FormattedMessage
                            id="stats.flashcards.averageScore"
                            defaultMessage="Average score"
                            description=""
                          />
                        </Box>
                        <Box variant="p">{mwFlashStudyAverage}</Box>
                      </SpaceBetween>
                      <br/>
                      <SpaceBetween direction="vertical" size="s">
                        <Header variant="h3">Russian</Header>
                        <Box variant="awsui-key-label">
                          <FormattedMessage
                            id="stats.flashcards.highestScore"
                            defaultMessage="Highest score"
                            description=""
                          />
                        </Box>
                        <Box variant="p">{mwFlashStudyHighestRussian}</Box>
                        <Box variant="awsui-key-label">
                          <FormattedMessage
                            id="stats.flashcards.averageScore"
                            defaultMessage="Average score"
                            description=""
                          />
                        </Box>
                        <Box variant="p">{mwFlashStudyAverageRussian}</Box>
                      </SpaceBetween>
                    </SpaceBetween>
                    <hr/>
                    <Tabs
                      tabs={[
                        {
                          label: "Vietnamese",
                          id: "vi",
                          content: (
                            <Table
                              wrapLines
                              onSelectionChange={() => {}}
                              selectedItems={[]}
                              columnDefinitions={[
                                {
                                  id: "date",
                                  header: "Attempt Date",
                                  cell: e => <Link href="/view-flashcard-times" variant="primary">{e.date}</Link>,
                                  sortingField: "date",
                                },
                                {
                                  id: "completionTime",
                                  header: "Time to Completion",
                                  cell: e => e.completionTime,
                                  sortingField: "completionTime",
                                },
                                {
                                  id: "avgTimePerCard",
                                  header: "Average Time per Card",
                                  cell: e => e.avgTimePerCard,
                                }
                              ]}
                              items={[
                                {
                                  date: '11/23/2022',
                                  completionTime: '1 minute 32 seconds',
                                  avgTimePerCard: '7.48 seconds',
                                },
                                {
                                  date: '11/28/2022',
                                  completionTime: '1 minute 45 seconds',
                                  avgTimePerCard: '8.22 seconds',
                                },
                                {
                                  date: '12/02/2023',
                                  completionTime: '1 minute 18 seconds',
                                  avgTimePerCard: '6.32 seconds',
                                },
                              ]}
                              header={
                                <Header variant="h2">
                                  Vietnamese Flashcards
                                </Header>
                              }
                            />
                          ),
                        },
                        {
                          label: "Russian",
                          id: "ru",
                          content: (
                            <Table
                              wrapLines
                              onSelectionChange={() => {}}
                              selectedItems={[]}
                              columnDefinitions={[
                                {
                                  id: "date",
                                  header: "Attempt Date",
                                  cell: e => <Link href="/view-flashcard-times" variant="primary">{e.date}</Link>,
                                  sortingField: "date",
                                },
                                {
                                  id: "completionTime",
                                  header: "Time to Completion",
                                  cell: e => e.completionTime,
                                  sortingField: "completionTime",
                                },
                                {
                                  id: "avgTimePerCard",
                                  header: "Average Time per Card",
                                  cell: e => e.avgTimePerCard,
                                }
                              ]}
                              items={[
                                {
                                  date: '11/23/2022',
                                  completionTime: '1 minute 32 seconds',
                                  avgTimePerCard: '7.48 seconds',
                                },
                                {
                                  date: '11/28/2022',
                                  completionTime: '1 minute 45 seconds',
                                  avgTimePerCard: '8.22 seconds',
                                },
                                {
                                  date: '12/02/2023',
                                  completionTime: '1 minute 18 seconds',
                                  avgTimePerCard: '6.32 seconds',
                                },
                              ]}
                              header={
                                <Header variant="h2">
                                  Russian Flashcards
                                </Header>
                              }
                            />
                          )
                        },
                      ]}
                    />
                  </Container>
                  <br/>
                  <Container
                    header={
                      <Header
                        variant="h3"
                        description="These are the data points from Test mode: EASY."
                        actions={
                          <SpaceBetween direction="horizontal" size="m">
                            <Button
                              variant="primary"
                              onClick={() => console.log('This will open a modal')}
                            >
                              Take notes
                            </Button>
                          </SpaceBetween>
                        }
                      >
                        Test mode: EASY
                      </Header>
                    }
                  >
                    <LineChart
                      series={[
                        {
                          title: "Vietnamese Vocabulary",
                          type: "line",
                          data: mwFlashEasy,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        {
                          title: "Russian Vocabulary",
                          type: "line",
                          data: mwFlashEasyRussian,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        // {
                        //   title: "Hebrew Vocabulary",
                        //   type: "line",
                        //   data: [
                        //     { x: new Date(1601013600000), y: 131023 },
                        //     { x: new Date(1601014500000), y: 164975 },
                        //     { x: new Date(1601015400000), y: 176980 },
                        //     { x: new Date(1601016300000), y: 168052 },
                        //     { x: new Date(1601017200000), y: 149130 },
                        //     { x: new Date(1601018100000), y: 147299 },
                        //     { x: new Date(1601019000000), y: 169552 },
                        //     { x: new Date(1601019900000), y: 163401 },
                        //     { x: new Date(1601020800000), y: 154091 },
                        //     { x: new Date(1601021700000), y: 199516 },
                        //     { x: new Date(1601022600000), y: 195503 },
                        //     { x: new Date(1601023500000), y: 189953 },
                        //     { x: new Date(1601024400000), y: 101635 },
                        //     { x: new Date(1601025300000), y: 192975 },
                        //     { x: new Date(1601026200000), y: 295951 },
                        //     { x: new Date(1601027100000), y: 218958 },
                        //     { x: new Date(1601028000000), y: 220516 },
                        //     { x: new Date(1601028900000), y: 213557 },
                        //     { x: new Date(1601029800000), y: 165899 },
                        //     { x: new Date(1601030700000), y: 373557 },
                        //     { x: new Date(1601031600000), y: 472331 },
                        //     { x: new Date(1601032500000), y: 486492 },
                        //     { x: new Date(1601033400000), y: 331541 },
                        //     { x: new Date(1601034300000), y: 242262 },
                        //     { x: new Date(1601035200000), y: 194091 },
                        //     { x: new Date(1601036100000), y: 185899 },
                        //     { x: new Date(1601037000000), y: 173401 },
                        //     { x: new Date(1601037900000), y: 171635 },
                        //     { x: new Date(1601038800000), y: 100130 },
                        //     { x: new Date(1601039700000), y: 185951 },
                        //     { x: new Date(1601040600000), y: 104091 },
                        //     { x: new Date(1601041500000), y: 152975 },
                        //     { x: new Date(1601042400000), y: 127299 }
                        //   ],
                        //   valueFormatter: function o(e) {
                        //     return Math.abs(e) >= 1e9
                        //       ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //           "G"
                        //       : Math.abs(e) >= 1e6
                        //       ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //         "M"
                        //       : Math.abs(e) >= 1e3
                        //       ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //         "K"
                        //       : e.toFixed(2);
                        //   }
                        // },
                        {
                          title: "Performance goal",
                          type: "threshold",
                          y: 15,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        }
                      ]}
                      xDomain={[
                        new Date(2022, 10, 27),
                        new Date(2023, 1, 7)
                      ]}
                      yDomain={[0, 25]}
                      i18nStrings={{
                        filterLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterLabel"
                            defaultMessage="Filter displayed data"
                            description=""
                          />
                        ),
                        filterPlaceholder: (
                          <FormattedMessage
                            id="stats.tableStrings.filterPlaceholder"
                            defaultMessage="Filter data"
                            description=""
                          />
                        ),
                        filterSelectedAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterSelectedAriaLabel"
                            defaultMessage="selected"
                            description=""
                          />
                        ),
                        detailPopoverDismissAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.detailPopoverDismissAriaLabel"
                            defaultMessage="Dismiss"
                            description=""
                          />
                        ),
                        legendAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.legendAriaLabel"
                            defaultMessage="Legend"
                            description=""
                          />
                        ),
                        chartAriaRoleDescription: (
                          <FormattedMessage
                            id="stats.tableStrings.chartAriaRoleDescription"
                            defaultMessage="line chart"
                            description=""
                          />
                        ),
                        xTickFormatter: e =>
                          e
                            .toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: !1
                            })
                            .split(",")
                            .join("\n"),
                        yTickFormatter: function o(e) {
                          return Math.abs(e) >= 1e9
                            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                                "G"
                            : Math.abs(e) >= 1e6
                            ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                              "M"
                            : Math.abs(e) >= 1e3
                            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                              "K"
                            : e.toFixed(0);
                        }
                      }}
                      ariaLabel="Multiple data series line chart"
                      errorText="Error loading data."
                      height={300}
                      loadingText="Loading chart"
                      recoveryText="Retry"
                      xScaleType="time"
                      xTitle={
                        <FormattedMessage
                          id="stats.flashcards.xTitle"
                          defaultMessage="Time (UTC)"
                          description=""
                        />
                      }
                      yTitle={
                        <FormattedMessage
                          id="stats.flashcards.yTitle"
                          defaultMessage="Correct flashcards"
                          description=""
                        />
                      }
                      empty={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noDataAvailable"
                            defaultMessage="<b>No data available</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.thereIsNoDataAvailable"
                              defaultMessage="There is no data available"
                              description=""
                            />
                          </Box>
                        </Box>
                      }
                      noMatch={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noMatchingData"
                            defaultMessage="<b>No matching data</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>,
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.noMatchingDataToDisplay"
                              defaultMessage="There is no matching data to display"
                              description=""
                            />
                          </Box>
                          <Button>
                            <FormattedMessage
                              id="stats.clearFilter"
                              defaultMessage="Clear filter"
                              description=""
                            />
                          </Button>
                        </Box>
                      }
                    />
                    <hr/>
                    <SpaceBetween direction="horizontal" size="l">
                      <SpaceBetween direction="vertical" size="s">
                        <Header variant="h3">Vietnamese</Header>
                        <Box variant="awsui-key-label">Highest Score</Box>
                        <Box variant="p">{mwFlashEasyHighest}</Box>
                        <Box variant="awsui-key-label">Average Score</Box>
                        <Box variant="p">{mwFlashEasyAverage}</Box>
                      </SpaceBetween>
                      <br/>
                      <SpaceBetween direction="vertical" size="s">
                        <Header variant="h3">Russian</Header>
                        <Box variant="awsui-key-label">Highest Score</Box>
                        <Box variant="p">{mwFlashEasyHighestRussian}</Box>
                        <Box variant="awsui-key-label">Average Score</Box>
                        <Box variant="p">{mwFlashEasyAverageRussian}</Box>
                      </SpaceBetween>
                    </SpaceBetween>
                    <hr/>
                    <Tabs
                      tabs={[
                        {
                          label: "Vietnamese",
                          id: "vi",
                          content: (
                            <Table
                              wrapLines
                              onSelectionChange={() => {}}
                              selectedItems={[]}
                              columnDefinitions={[
                                {
                                  id: "date",
                                  header: "Attempt Date",
                                  cell: e => <Link href="/view-flashcard-times" variant="primary">{e.date}</Link>,
                                  sortingField: "date",
                                },
                                {
                                  id: "completionTime",
                                  header: "Time to Completion",
                                  cell: e => e.completionTime,
                                  sortingField: "completionTime",
                                },
                                {
                                  id: "avgTimePerCard",
                                  header: "Average Time per Card",
                                  cell: e => e.avgTimePerCard,
                                }
                              ]}
                              items={[
                                {
                                  date: '11/23/2022',
                                  completionTime: '1 minute 32 seconds',
                                  avgTimePerCard: '7.48 seconds',
                                },
                                {
                                  date: '11/28/2022',
                                  completionTime: '1 minute 45 seconds',
                                  avgTimePerCard: '8.22 seconds',
                                },
                                {
                                  date: '12/02/2023',
                                  completionTime: '1 minute 18 seconds',
                                  avgTimePerCard: '6.32 seconds',
                                },
                              ]}
                              header={
                                <Header variant="h2">
                                  Vietnamese Flashcards
                                </Header>
                              }
                            />
                          ),
                        },
                        {
                          label: "Russian",
                          id: "ru",
                          content: (
                            <Table
                              wrapLines
                              onSelectionChange={() => {}}
                              selectedItems={[]}
                              columnDefinitions={[
                                {
                                  id: "date",
                                  header: "Attempt Date",
                                  cell: e => <Link href="/view-flashcard-times" variant="primary">{e.date}</Link>,
                                  sortingField: "date",
                                },
                                {
                                  id: "completionTime",
                                  header: "Time to Completion",
                                  cell: e => e.completionTime,
                                  sortingField: "completionTime",
                                },
                                {
                                  id: "avgTimePerCard",
                                  header: "Average Time per Card",
                                  cell: e => e.avgTimePerCard,
                                }
                              ]}
                              items={[
                                {
                                  date: '11/23/2022',
                                  completionTime: '1 minute 32 seconds',
                                  avgTimePerCard: '7.48 seconds',
                                },
                                {
                                  date: '11/28/2022',
                                  completionTime: '1 minute 45 seconds',
                                  avgTimePerCard: '8.22 seconds',
                                },
                                {
                                  date: '12/02/2023',
                                  completionTime: '1 minute 18 seconds',
                                  avgTimePerCard: '6.32 seconds',
                                },
                              ]}
                              header={
                                <Header variant="h2">
                                  Russian Flashcards
                                </Header>
                              }
                            />
                          )
                        },
                      ]}
                    />
                  </Container>
                  <br/>
                  <Container
                    header={
                      <Header
                        variant="h3"
                        description="These are the data points from Test mode: DIFFICULT."
                        actions={
                          <SpaceBetween direction="horizontal" size="m">
                            <Button
                              variant="primary"
                              onClick={() => console.log('This will open a modal')}
                            >
                              Take notes
                            </Button>
                          </SpaceBetween>
                        }
                      >
                        Test mode: DIFFICULT
                      </Header>
                    }
                  >
                    <LineChart
                      series={[
                        {
                          title: "Vietnamese Vocabulary",
                          type: "line",
                          data: mwFlashDifficult,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        {
                          title: "Russian Vocabulary",
                          type: "line",
                          data: mwFlashDifficultRussian,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        // {
                        //   title: "Hebrew Vocabulary",
                        //   type: "line",
                        //   data: [
                        //     { x: new Date(1601013600000), y: 131023 },
                        //     { x: new Date(1601014500000), y: 164975 },
                        //     { x: new Date(1601015400000), y: 176980 },
                        //     { x: new Date(1601016300000), y: 168052 },
                        //     { x: new Date(1601017200000), y: 149130 },
                        //     { x: new Date(1601018100000), y: 147299 },
                        //     { x: new Date(1601019000000), y: 169552 },
                        //     { x: new Date(1601019900000), y: 163401 },
                        //     { x: new Date(1601020800000), y: 154091 },
                        //     { x: new Date(1601021700000), y: 199516 },
                        //     { x: new Date(1601022600000), y: 195503 },
                        //     { x: new Date(1601023500000), y: 189953 },
                        //     { x: new Date(1601024400000), y: 101635 },
                        //     { x: new Date(1601025300000), y: 192975 },
                        //     { x: new Date(1601026200000), y: 295951 },
                        //     { x: new Date(1601027100000), y: 218958 },
                        //     { x: new Date(1601028000000), y: 220516 },
                        //     { x: new Date(1601028900000), y: 213557 },
                        //     { x: new Date(1601029800000), y: 165899 },
                        //     { x: new Date(1601030700000), y: 373557 },
                        //     { x: new Date(1601031600000), y: 472331 },
                        //     { x: new Date(1601032500000), y: 486492 },
                        //     { x: new Date(1601033400000), y: 331541 },
                        //     { x: new Date(1601034300000), y: 242262 },
                        //     { x: new Date(1601035200000), y: 194091 },
                        //     { x: new Date(1601036100000), y: 185899 },
                        //     { x: new Date(1601037000000), y: 173401 },
                        //     { x: new Date(1601037900000), y: 171635 },
                        //     { x: new Date(1601038800000), y: 100130 },
                        //     { x: new Date(1601039700000), y: 185951 },
                        //     { x: new Date(1601040600000), y: 104091 },
                        //     { x: new Date(1601041500000), y: 152975 },
                        //     { x: new Date(1601042400000), y: 127299 }
                        //   ],
                        //   valueFormatter: function o(e) {
                        //     return Math.abs(e) >= 1e9
                        //       ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //           "G"
                        //       : Math.abs(e) >= 1e6
                        //       ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //         "M"
                        //       : Math.abs(e) >= 1e3
                        //       ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //         "K"
                        //       : e.toFixed(2);
                        //   }
                        // },
                        {
                          title: "Performance goal",
                          type: "threshold",
                          y: 15,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        }
                      ]}
                      xDomain={[
                        new Date(2022, 10, 27),
                        new Date(2023, 1, 7)
                      ]}
                      yDomain={[0, 25]}
                      i18nStrings={{
                        filterLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterLabel"
                            defaultMessage="Filter displayed data"
                            description=""
                          />
                        ),
                        filterPlaceholder: (
                          <FormattedMessage
                            id="stats.tableStrings.filterPlaceholder"
                            defaultMessage="Filter data"
                            description=""
                          />
                        ),
                        filterSelectedAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterSelectedAriaLabel"
                            defaultMessage="selected"
                            description=""
                          />
                        ),
                        detailPopoverDismissAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.detailPopoverDismissAriaLabel"
                            defaultMessage="Dismiss"
                            description=""
                          />
                        ),
                        legendAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.legendAriaLabel"
                            defaultMessage="Legend"
                            description=""
                          />
                        ),
                        chartAriaRoleDescription: (
                          <FormattedMessage
                            id="stats.tableStrings.chartAriaRoleDescription"
                            defaultMessage="line chart"
                            description=""
                          />
                        ),
                        xTickFormatter: e =>
                          e
                            .toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: !1
                            })
                            .split(",")
                            .join("\n"),
                        yTickFormatter: function o(e) {
                          return Math.abs(e) >= 1e9
                            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                                "G"
                            : Math.abs(e) >= 1e6
                            ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                              "M"
                            : Math.abs(e) >= 1e3
                            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                              "K"
                            : e.toFixed(0);
                        }
                      }}
                      ariaLabel="Multiple data series line chart"
                      errorText="Error loading data."
                      height={300}
                      loadingText="Loading chart"
                      recoveryText="Retry"
                      xScaleType="time"
                      xTitle={
                        <FormattedMessage
                          id="stats.flashcards.xTitle"
                          defaultMessage="Time (UTC)"
                          description=""
                        />
                      }
                      yTitle={
                        <FormattedMessage
                          id="stats.flashcards.yTitle"
                          defaultMessage="Correct flashcards"
                          description=""
                        />
                      }
                      empty={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noDataAvailable"
                            defaultMessage="<b>No data available</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.thereIsNoDataAvailable"
                              defaultMessage="There is no data available"
                              description=""
                            />
                          </Box>
                        </Box>
                      }
                      noMatch={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noMatchingData"
                            defaultMessage="<b>No matching data</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>,
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.noMatchingDataToDisplay"
                              defaultMessage="There is no matching data to display"
                              description=""
                            />
                          </Box>
                          <Button>
                            <FormattedMessage
                              id="stats.clearFilter"
                              defaultMessage="Clear filter"
                              description=""
                            />
                          </Button>
                        </Box>
                      }
                    />
                    <SpaceBetween direction="vertical" size="l">
                      <Header variant="h4">Vietnamese</Header>
                      <Box variant="awsui-key-label">Highest Score</Box>
                      <Box variant="p">{mwFlashDifficultHighest}</Box>
                      <Box variant="awsui-key-label">Average Score</Box>
                      <Box variant="p">{mwFlashDifficultAverage}</Box>
                      <br/>
                      <Header variant="h4">Russian</Header>
                      <Box variant="awsui-key-label">Highest Score</Box>
                      <Box variant="p">{mwFlashDifficultHighestRussian}</Box>
                      <Box variant="awsui-key-label">Average Score</Box>
                      <Box variant="p">{mwFlashDifficultAverageRussian}</Box>
                    </SpaceBetween>
                  </Container>
                </Container>
                <br/>
                <Container
                  header={
                    <Header
                      variant="h2"
                      description={`The single chart below reflects the students score when completing study games assigned by Iuliia.`}
                      actions={
                        <SpaceBetween direction="horizontal" size="m">
                          <Button
                            variant="primary"
                            onClick={() => console.log('This will open a modal')}
                          >
                            Take notes
                          </Button>
                        </SpaceBetween>
                      }
                    >
                      Games
                    </Header>
                  }
                >
                  <LineChart
                    series={[
                      {
                        title: "Vietnamese Vocabulary",
                        type: "line",
                        data: mwGames,
                        // valueFormatter: function o(e) {
                        //   return Math.abs(e) >= 1e9
                        //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //         "G"
                        //     : Math.abs(e) >= 1e6
                        //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //       "M"
                        //     : Math.abs(e) >= 1e3
                        //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //       "K"
                        //     : e.toFixed(2);
                        // }
                      },
                      {
                        title: "Russian Vocabulary",
                        type: "line",
                        data: mwGamesRussian,
                        // valueFormatter: function o(e) {
                        //   return Math.abs(e) >= 1e9
                        //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //         "G"
                        //     : Math.abs(e) >= 1e6
                        //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //       "M"
                        //     : Math.abs(e) >= 1e3
                        //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //       "K"
                        //     : e.toFixed(2);
                        // }
                      },
                      // {
                      //   title: "Hebrew Vocabulary",
                      //   type: "line",
                      //   data: [
                      //     { x: new Date(1601013600000), y: 131023 },
                      //     { x: new Date(1601014500000), y: 164975 },
                      //     { x: new Date(1601015400000), y: 176980 },
                      //     { x: new Date(1601016300000), y: 168052 },
                      //     { x: new Date(1601017200000), y: 149130 },
                      //     { x: new Date(1601018100000), y: 147299 },
                      //     { x: new Date(1601019000000), y: 169552 },
                      //     { x: new Date(1601019900000), y: 163401 },
                      //     { x: new Date(1601020800000), y: 154091 },
                      //     { x: new Date(1601021700000), y: 199516 },
                      //     { x: new Date(1601022600000), y: 195503 },
                      //     { x: new Date(1601023500000), y: 189953 },
                      //     { x: new Date(1601024400000), y: 101635 },
                      //     { x: new Date(1601025300000), y: 192975 },
                      //     { x: new Date(1601026200000), y: 295951 },
                      //     { x: new Date(1601027100000), y: 218958 },
                      //     { x: new Date(1601028000000), y: 220516 },
                      //     { x: new Date(1601028900000), y: 213557 },
                      //     { x: new Date(1601029800000), y: 165899 },
                      //     { x: new Date(1601030700000), y: 373557 },
                      //     { x: new Date(1601031600000), y: 472331 },
                      //     { x: new Date(1601032500000), y: 486492 },
                      //     { x: new Date(1601033400000), y: 331541 },
                      //     { x: new Date(1601034300000), y: 242262 },
                      //     { x: new Date(1601035200000), y: 194091 },
                      //     { x: new Date(1601036100000), y: 185899 },
                      //     { x: new Date(1601037000000), y: 173401 },
                      //     { x: new Date(1601037900000), y: 171635 },
                      //     { x: new Date(1601038800000), y: 100130 },
                      //     { x: new Date(1601039700000), y: 185951 },
                      //     { x: new Date(1601040600000), y: 104091 },
                      //     { x: new Date(1601041500000), y: 152975 },
                      //     { x: new Date(1601042400000), y: 127299 }
                      //   ],
                      //   valueFormatter: function o(e) {
                      //     return Math.abs(e) >= 1e9
                      //       ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                      //           "G"
                      //       : Math.abs(e) >= 1e6
                      //       ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                      //         "M"
                      //       : Math.abs(e) >= 1e3
                      //       ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                      //         "K"
                      //       : e.toFixed(2);
                      //   }
                      // },
                      {
                        title: "Performance goal",
                        type: "threshold",
                        y: 15,
                        // valueFormatter: function o(e) {
                        //   return Math.abs(e) >= 1e9
                        //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //         "G"
                        //     : Math.abs(e) >= 1e6
                        //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //       "M"
                        //     : Math.abs(e) >= 1e3
                        //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //       "K"
                        //     : e.toFixed(2);
                        // }
                      }
                    ]}
                    xDomain={[
                      new Date(2022, 10, 27),
                      new Date(2023, 1, 7)
                    ]}
                    yDomain={[0, 25]}
                    i18nStrings={{
                      filterLabel: (
                        <FormattedMessage
                          id="stats.tableStrings.filterLabel"
                          defaultMessage="Filter displayed data"
                          description=""
                        />
                      ),
                      filterPlaceholder: (
                        <FormattedMessage
                          id="stats.tableStrings.filterPlaceholder"
                          defaultMessage="Filter data"
                          description=""
                        />
                      ),
                      filterSelectedAriaLabel: (
                        <FormattedMessage
                          id="stats.tableStrings.filterSelectedAriaLabel"
                          defaultMessage="selected"
                          description=""
                        />
                      ),
                      detailPopoverDismissAriaLabel: (
                        <FormattedMessage
                          id="stats.tableStrings.detailPopoverDismissAriaLabel"
                          defaultMessage="Dismiss"
                          description=""
                        />
                      ),
                      legendAriaLabel: (
                        <FormattedMessage
                          id="stats.tableStrings.legendAriaLabel"
                          defaultMessage="Legend"
                          description=""
                        />
                      ),
                      chartAriaRoleDescription: (
                        <FormattedMessage
                          id="stats.tableStrings.chartAriaRoleDescription"
                          defaultMessage="line chart"
                          description=""
                        />
                      ),
                      xTickFormatter: e =>
                        e
                          .toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: !1
                          })
                          .split(",")
                          .join("\n"),
                      yTickFormatter: function o(e) {
                        return Math.abs(e) >= 1e9
                          ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                              "G"
                          : Math.abs(e) >= 1e6
                          ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                            "M"
                          : Math.abs(e) >= 1e3
                          ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                            "K"
                          : e.toFixed(0);
                      }
                    }}
                    ariaLabel="Multiple data series line chart"
                    errorText="Error loading data."
                    height={300}
                    loadingText="Loading chart"
                    recoveryText="Retry"
                    xScaleType="time"
                    xTitle={
                      <FormattedMessage
                        id="stats.flashcards.xTitle"
                        defaultMessage="Time (UTC)"
                        description=""
                      />
                    }
                    yTitle={
                      <FormattedMessage
                        id="stats.flashcards.yTitle"
                        defaultMessage="Correct flashcards"
                        description=""
                      />
                    }
                    empty={
                      <Box textAlign="center" color="inherit">
                        <FormattedMessage
                          id="stats.noDataAvailable"
                          defaultMessage="<b>No data available</b>"
                          description=""
                          values={{
                            b: chunks => <b>{chunks}</b>
                          }}
                        />
                        <Box variant="p" color="inherit">
                          <FormattedMessage
                            id="stats.thereIsNoDataAvailable"
                            defaultMessage="There is no data available"
                            description=""
                          />
                        </Box>
                      </Box>
                    }
                    noMatch={
                      <Box textAlign="center" color="inherit">
                        <FormattedMessage
                          id="stats.noMatchingData"
                          defaultMessage="<b>No matching data</b>"
                          description=""
                          values={{
                            b: chunks => <b>{chunks}</b>,
                          }}
                        />
                        <Box variant="p" color="inherit">
                          <FormattedMessage
                            id="stats.noMatchingDataToDisplay"
                            defaultMessage="There is no matching data to display"
                            description=""
                          />
                        </Box>
                        <Button>
                          <FormattedMessage
                            id="stats.clearFilter"
                            defaultMessage="Clear filter"
                            description=""
                          />
                        </Button>
                      </Box>
                    }
                  />
                  <SpaceBetween direction="vertical" size="l">
                      <Header variant="h4">Vietnamese</Header>
                      <Box variant="awsui-key-label">Highest Score</Box>
                      <Box variant="p">{mwGamesHighest}</Box>
                      <Box variant="awsui-key-label">Average Score</Box>
                      <Box variant="p">{mwGamesAverage}</Box>
                      <br/>
                      <Header variant="h4">Russian</Header>
                      <Box variant="awsui-key-label">Highest Score</Box>
                      <Box variant="p">{mwGamesHighestRussian}</Box>
                      <Box variant="awsui-key-label">Average Score</Box>
                      <Box variant="p">{mwGamesAverageRussian}</Box>
                    </SpaceBetween>
                </Container>
              </>
            )
          },
          {
            label: 'Another Student',
            id: 'second',
            content: (
              <>
                <Header
                  variant="h1"
                  description={
                    <FormattedMessage
                      id="stats.header.description"
                      defaultMessage="This is where all of the stats for a student will be displayed. There will be a container for each category, such as Flashcards, and within each container there may be several charts or only one chart. For example, the Flashcards container consists of 3 charts: Study mode, Test mode - Easy, and Test mode - Difficult."
                      description=""
                    />
                  }
                >
                  <FormattedMessage
                    id="stats.header"
                    defaultMessage="Student progress charts"
                    description=""
                  />
                </Header>
                <Container
                  header={
                    <Header
                      variant="h2"
                      description={
                        <FormattedMessage
                          id="stats.flashcards.header.description"
                          defaultMessage={`The 3 charts displayed below are a reflection of how many cards <the student> got correct during Study mode, and of how many questions were answered correctly during both Test modes (Easy; Difficult). These data points are reflected in real time by using a "push" model on the server, which allows server updates to be directly pushed to the website UI, so no need for refreshing!`}
                          description=""
                        />
                      }
                    >
                      <FormattedMessage
                        id="stats.flashcards.header"
                        defaultMessage="Flashcards"
                        description=""
                      />
                    </Header>
                  }
                >
                  <Container
                    header={
                      <Header
                        variant="h3"
                        description={
                          <FormattedMessage
                            id="stats.flashcards.studyMode.header.description"
                            defaultMessage="These are the data points from Study mode flashcard sessions."
                            description=""
                          />
                        }
                        actions={
                          <SpaceBetween direction="horizontal" size="m">
                            <Button
                              variant="primary"
                              onClick={() => console.log('This will open a modal')}
                            >
                              <FormattedMessage
                                id="stats.flashcards.studyMode.header.takeNotesButton"
                                defaultMessage="Take notes"
                                description=""
                              />
                            </Button>
                          </SpaceBetween>
                        }
                      >
                        <FormattedMessage
                          id="stats.flashcards.studyMode.header"
                          defaultMessage="Study mode"
                          description=""
                        />
                      </Header>
                    }
                  >
                    <LineChart
                      series={[
                        {
                          title: "Vietnamese Vocabulary",
                          type: "line",
                          data: [
                            {x: new Date(2022, 8, 1), y: 18},
                            {x: new Date(2022, 8, 2), y: 20},
                            {x: new Date(2022, 8, 3), y: 3},
                            {x: new Date(2022, 8, 4), y: 0},
                            {x: new Date(2022, 8, 5), y: 15},
                            {x: new Date(2022, 8, 11), y: 4},
                            {x: new Date(2022, 8, 12), y: 9},
                            {x: new Date(2022, 8, 13), y: 13},
                            {x: new Date(2022, 8, 14), y: 5},
                            {x: new Date(2022, 8, 15), y: 14},
                            {x: new Date(2022, 8, 16), y: 16},
                            {x: new Date(2022, 8, 17), y: 11},
                            {x: new Date(2022, 8, 18), y: 5},
                            {x: new Date(2022, 8, 22), y: 7},
                            {x: new Date(2022, 8, 23), y: 1},
                            {x: new Date(2022, 8, 24), y: 16},
                            {x: new Date(2022, 8, 25), y: 6},
                            {x: new Date(2022, 8, 26), y: 24},
                            {x: new Date(2022, 8, 27), y: 4},
                            {x: new Date(2022, 8, 28), y: 9},
                            {x: new Date(2022, 8, 29), y: 3},
                            {x: new Date(2022, 8, 30), y: 22},
                            {x: new Date(2022, 9, 1), y: 18},
                            {x: new Date(2022, 9, 2), y: 20},
                            {x: new Date(2022, 9, 3), y: 3},
                            {x: new Date(2022, 9, 4), y: 0},
                            {x: new Date(2022, 9, 7), y: 3},
                            {x: new Date(2022, 9, 8), y: 15},
                            {x: new Date(2022, 9, 9), y: 10},
                            {x: new Date(2022, 9, 10), y: 5},
                            {x: new Date(2022, 9, 11), y: 4},
                            {x: new Date(2022, 9, 12), y: 9},
                            {x: new Date(2022, 9, 16), y: 16},
                            {x: new Date(2022, 9, 17), y: 11},
                            {x: new Date(2022, 9, 18), y: 5},
                            {x: new Date(2022, 9, 19), y: 16},
                            {x: new Date(2022, 9, 20), y: 10},
                            {x: new Date(2022, 9, 21), y: 19},
                            {x: new Date(2022, 9, 22), y: 7},
                            {x: new Date(2022, 9, 23), y: 1},
                            {x: new Date(2022, 9, 24), y: 16},
                            {x: new Date(2022, 9, 31), y: 20},
                            {x: new Date(2022, 10, 1), y: 15},
                            {x: new Date(2022, 10, 2), y: 24},
                            {x: new Date(2022, 10, 3), y: 4},
                            {x: new Date(2022, 10, 4), y: 19},
                            {x: new Date(2022, 10, 5), y: 12},
                            {x: new Date(2022, 10, 6), y: 8},
                            {x: new Date(2022, 10, 7), y: 4},
                            {x: new Date(2022, 10, 8), y: 1},
                            {x: new Date(2022, 10, 16), y: 17},
                            {x: new Date(2022, 10, 17), y: 7},
                            {x: new Date(2022, 10, 18), y: 19},
                            {x: new Date(2022, 10, 19), y: 5},
                            {x: new Date(2022, 10, 20), y: 20},
                            {x: new Date(2022, 10, 21), y: 0},
                            {x: new Date(2022, 10, 24), y: 9},
                            {x: new Date(2022, 10, 25), y: 20},
                            {x: new Date(2022, 10, 26), y: 14},
                            {x: new Date(2022, 10, 29), y: 9},
                            {x: new Date(2022, 10, 30), y: 19},
                            {x: new Date(2022, 11, 1), y: 7},
                            {x: new Date(2022, 11, 2), y: 4},
                            {x: new Date(2022, 11, 3), y: 23},
                            {x: new Date(2022, 11, 4), y: 23},
                            {x: new Date(2022, 11, 13), y: 22},
                            {x: new Date(2022, 11, 14), y: 1},
                            {x: new Date(2022, 11, 15), y: 23},
                            {x: new Date(2022, 11, 16), y: 19},
                            {x: new Date(2022, 11, 17), y: 13},
                            {x: new Date(2022, 11, 18), y: 13},
                            {x: new Date(2022, 11, 19), y: 7},
                            {x: new Date(2022, 11, 20), y: 24},
                            {x: new Date(2022, 11, 21), y: 6},
                            {x: new Date(2022, 11, 31), y: 15},
                            {x: new Date(2023, 0, 1), y: 1},
                            {x: new Date(2023, 0, 2), y: 14},
                            {x: new Date(2023, 0, 3), y: 21},
                            {x: new Date(2023, 0, 19), y: 19},
                            {x: new Date(2023, 0, 20), y: 13},
                            {x: new Date(2023, 0, 21), y: 4},
                            {x: new Date(2023, 0, 22), y: 1},
                            {x: new Date(2023, 0, 23), y: 11},
                            {x: new Date(2023, 0, 30), y: 3},
                            {x: new Date(2023, 0, 31), y: 12},
                            {x: new Date(2023, 1, 1), y: 6},
                            {x: new Date(2023, 1, 2), y: 4},
                            {x: new Date(2023, 1, 3), y: 18},
                            {x: new Date(2023, 1, 4), y: 4},
                            {x: new Date(2023, 1, 5), y: 22},
                            {x: new Date(2023, 1, 6), y: 15},
                            {x: new Date(2023, 1, 7), y: 17},
                            {x: new Date(2023, 1, 8), y: 7},
                            {x: new Date(2023, 1, 9), y: 17},
                            {x: new Date(2023, 1, 10), y: 16},
                            {x: new Date(2023, 1, 15), y: 17},
                            {x: new Date(2023, 1, 16), y: 9},
                            {x: new Date(2023, 1, 17), y: 9},
                            {x: new Date(2023, 1, 18), y: 3},
                            {x: new Date(2023, 1, 19), y: 3},
                            {x: new Date(2023, 1, 26), y: 6},
                            {x: new Date(2023, 1, 27), y: 7},
                            {x: new Date(2023, 1, 28), y: 23},
                          ],
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        {
                          title: "Russian Vocabulary",
                          type: "line",
                          data: [
                            {x: new Date(2022, 8, 1), y: 13},
                            {x: new Date(2022, 8, 2), y: 20},
                            {x: new Date(2022, 8, 3), y: 14},
                            {x: new Date(2022, 8, 4), y: 7},
                            {x: new Date(2022, 8, 5), y: 11},
                            {x: new Date(2022, 8, 11), y: 6},
                            {x: new Date(2022, 8, 12), y: 3},
                            {x: new Date(2022, 8, 13), y: 12},
                            {x: new Date(2022, 8, 14), y: 3},
                            {x: new Date(2022, 8, 15), y: 10},
                            {x: new Date(2022, 8, 16), y: 2},
                            {x: new Date(2022, 8, 17), y: 9},
                            {x: new Date(2022, 8, 18), y: 1},
                            {x: new Date(2022, 8, 22), y: 9},
                            {x: new Date(2022, 8, 23), y: 8},
                            {x: new Date(2022, 8, 24), y: 10},
                            {x: new Date(2022, 8, 25), y: 18},
                            {x: new Date(2022, 8, 26), y: 13},
                            {x: new Date(2022, 8, 27), y: 11},
                            {x: new Date(2022, 8, 28), y: 20},
                            {x: new Date(2022, 8, 29), y: 24},
                            {x: new Date(2022, 8, 30), y: 15},
                            {x: new Date(2022, 9, 1), y: 13},
                            {x: new Date(2022, 9, 2), y: 20},
                            {x: new Date(2022, 9, 3), y: 14},
                            {x: new Date(2022, 9, 4), y: 7},
                            {x: new Date(2022, 9, 7), y: 14},
                            {x: new Date(2022, 9, 8), y: 7},
                            {x: new Date(2022, 9, 9), y: 7},
                            {x: new Date(2022, 9, 10), y: 10},
                            {x: new Date(2022, 9, 11), y: 6},
                            {x: new Date(2022, 9, 12), y: 3},
                            {x: new Date(2022, 9, 16), y: 2},
                            {x: new Date(2022, 9, 17), y: 9},
                            {x: new Date(2022, 9, 18), y: 1},
                            {x: new Date(2022, 9, 19), y: 23},
                            {x: new Date(2022, 9, 20), y: 24},
                            {x: new Date(2022, 9, 21), y: 21},
                            {x: new Date(2022, 9, 22), y: 9},
                            {x: new Date(2022, 9, 23), y: 8},
                            {x: new Date(2022, 9, 24), y: 10},
                            {x: new Date(2022, 9, 31), y: 24},
                            {x: new Date(2022, 10, 1), y: 11},
                            {x: new Date(2022, 10, 2), y: 13},
                            {x: new Date(2022, 10, 3), y: 14},
                            {x: new Date(2022, 10, 4), y: 4},
                            {x: new Date(2022, 10, 5), y: 15},
                            {x: new Date(2022, 10, 6), y: 18},
                            {x: new Date(2022, 10, 7), y: 19},
                            {x: new Date(2022, 10, 8), y: 25},
                            {x: new Date(2022, 10, 16), y: 5},
                            {x: new Date(2022, 10, 17), y: 9},
                            {x: new Date(2022, 10, 18), y: 8},
                            {x: new Date(2022, 10, 19), y: 16},
                            {x: new Date(2022, 10, 20), y: 10},
                            {x: new Date(2022, 10, 21), y: 5},
                            {x: new Date(2022, 10, 24), y: 2},
                            {x: new Date(2022, 10, 25), y: 21},
                            {x: new Date(2022, 10, 26), y: 20},
                            {x: new Date(2022, 10, 29), y: 0},
                            {x: new Date(2022, 10, 30), y: 10},
                            {x: new Date(2022, 11, 1), y: 4},
                            {x: new Date(2022, 11, 2), y: 23},
                            {x: new Date(2022, 11, 3), y: 5},
                            {x: new Date(2022, 11, 4), y: 16},
                            {x: new Date(2022, 11, 13), y: 20},
                            {x: new Date(2022, 11, 14), y: 16},
                            {x: new Date(2022, 11, 15), y: 19},
                            {x: new Date(2022, 11, 16), y: 24},
                            {x: new Date(2022, 11, 17), y: 11},
                            {x: new Date(2022, 11, 18), y: 15},
                            {x: new Date(2022, 11, 19), y: 11},
                            {x: new Date(2022, 11, 20), y: 1},
                            {x: new Date(2022, 11, 21), y: 3},
                            {x: new Date(2022, 11, 31), y: 10},
                            {x: new Date(2023, 0, 1), y: 19},
                            {x: new Date(2023, 0, 2), y: 2},
                            {x: new Date(2023, 0, 3), y: 5},
                            {x: new Date(2023, 0, 19), y: 9},
                            {x: new Date(2023, 0, 20), y: 2},
                            {x: new Date(2023, 0, 21), y: 8},
                            {x: new Date(2023, 0, 22), y: 10},
                            {x: new Date(2023, 0, 23), y: 11},
                            {x: new Date(2023, 0, 30), y: 17},
                            {x: new Date(2023, 0, 31), y: 3},
                            {x: new Date(2023, 1, 1), y: 17},
                            {x: new Date(2023, 1, 2), y: 10},
                            {x: new Date(2023, 1, 3), y: 17},
                            {x: new Date(2023, 1, 4), y: 21},
                            {x: new Date(2023, 1, 5), y: 17},
                            {x: new Date(2023, 1, 6), y: 10},
                            {x: new Date(2023, 1, 7), y: 5},
                            {x: new Date(2023, 1, 8), y: 4},
                            {x: new Date(2023, 1, 9), y: 10},
                            {x: new Date(2023, 1, 10), y: 22},
                            {x: new Date(2023, 1, 15), y: 5},
                            {x: new Date(2023, 1, 16), y: 11},
                            {x: new Date(2023, 1, 17), y: 17},
                            {x: new Date(2023, 1, 18), y: 19},
                            {x: new Date(2023, 1, 19), y: 3},
                            {x: new Date(2023, 1, 26), y: 20},
                            {x: new Date(2023, 1, 27), y: 25},
                            {x: new Date(2023, 1, 28), y: 20},
                          ],
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        // {
                        //   title: "Hebrew Vocabulary",
                        //   type: "line",
                        //   data: [
                        //     { x: new Date(1601013600000), y: 131023 },
                        //     { x: new Date(1601014500000), y: 164975 },
                        //     { x: new Date(1601015400000), y: 176980 },
                        //     { x: new Date(1601016300000), y: 168052 },
                        //     { x: new Date(1601017200000), y: 149130 },
                        //     { x: new Date(1601018100000), y: 147299 },
                        //     { x: new Date(1601019000000), y: 169552 },
                        //     { x: new Date(1601019900000), y: 163401 },
                        //     { x: new Date(1601020800000), y: 154091 },
                        //     { x: new Date(1601021700000), y: 199516 },
                        //     { x: new Date(1601022600000), y: 195503 },
                        //     { x: new Date(1601023500000), y: 189953 },
                        //     { x: new Date(1601024400000), y: 101635 },
                        //     { x: new Date(1601025300000), y: 192975 },
                        //     { x: new Date(1601026200000), y: 295951 },
                        //     { x: new Date(1601027100000), y: 218958 },
                        //     { x: new Date(1601028000000), y: 220516 },
                        //     { x: new Date(1601028900000), y: 213557 },
                        //     { x: new Date(1601029800000), y: 165899 },
                        //     { x: new Date(1601030700000), y: 373557 },
                        //     { x: new Date(1601031600000), y: 472331 },
                        //     { x: new Date(1601032500000), y: 486492 },
                        //     { x: new Date(1601033400000), y: 331541 },
                        //     { x: new Date(1601034300000), y: 242262 },
                        //     { x: new Date(1601035200000), y: 194091 },
                        //     { x: new Date(1601036100000), y: 185899 },
                        //     { x: new Date(1601037000000), y: 173401 },
                        //     { x: new Date(1601037900000), y: 171635 },
                        //     { x: new Date(1601038800000), y: 100130 },
                        //     { x: new Date(1601039700000), y: 185951 },
                        //     { x: new Date(1601040600000), y: 104091 },
                        //     { x: new Date(1601041500000), y: 152975 },
                        //     { x: new Date(1601042400000), y: 127299 }
                        //   ],
                        //   valueFormatter: function o(e) {
                        //     return Math.abs(e) >= 1e9
                        //       ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //           "G"
                        //       : Math.abs(e) >= 1e6
                        //       ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //         "M"
                        //       : Math.abs(e) >= 1e3
                        //       ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //         "K"
                        //       : e.toFixed(2);
                        //   }
                        // },
                        {
                          title: "Performance goal",
                          type: "threshold",
                          y: 15,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        }
                      ]}
                      xDomain={[
                        new Date(2022, 10, 27),
                        new Date(2023, 1, 7)
                      ]}
                      yDomain={[0, 25]}
                      i18nStrings={{
                        filterLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterLabel"
                            defaultMessage="Filter displayed data"
                            description=""
                          />
                        ),
                        filterPlaceholder: (
                          <FormattedMessage
                            id="stats.tableStrings.filterPlaceholder"
                            defaultMessage="Filter data"
                            description=""
                          />
                        ),
                        filterSelectedAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterSelectedAriaLabel"
                            defaultMessage="selected"
                            description=""
                          />
                        ),
                        detailPopoverDismissAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.detailPopoverDismissAriaLabel"
                            defaultMessage="Dismiss"
                            description=""
                          />
                        ),
                        legendAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.legendAriaLabel"
                            defaultMessage="Legend"
                            description=""
                          />
                        ),
                        chartAriaRoleDescription: (
                          <FormattedMessage
                            id="stats.tableStrings.chartAriaRoleDescription"
                            defaultMessage="line chart"
                            description=""
                          />
                        ),
                        xTickFormatter: e =>
                          e
                            .toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: !1
                            })
                            .split(",")
                            .join("\n"),
                        yTickFormatter: function o(e) {
                          return Math.abs(e) >= 1e9
                            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                                "G"
                            : Math.abs(e) >= 1e6
                            ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                              "M"
                            : Math.abs(e) >= 1e3
                            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                              "K"
                            : e.toFixed(0);
                        }
                      }}
                      ariaLabel="Multiple data series line chart"
                      errorText="Error loading data."
                      height={300}
                      loadingText="Loading chart"
                      recoveryText="Retry"
                      xScaleType="time"
                      xTitle={
                        <FormattedMessage
                          id="stats.flashcards.xTitle"
                          defaultMessage="Time (UTC)"
                          description=""
                        />
                      }
                      yTitle={
                        <FormattedMessage
                          id="stats.flashcards.yTitle"
                          defaultMessage="Correct flashcards"
                          description=""
                        />
                      }
                      empty={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noDataAvailable"
                            defaultMessage="<b>No data available</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.thereIsNoDataAvailable"
                              defaultMessage="There is no data available"
                              description=""
                            />
                          </Box>
                        </Box>
                      }
                      noMatch={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noMatchingData"
                            defaultMessage="<b>No matching data</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>,
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.noMatchingDataToDisplay"
                              defaultMessage="There is no matching data to display"
                              description=""
                            />
                          </Box>
                          <Button>
                            <FormattedMessage
                              id="stats.clearFilter"
                              defaultMessage="Clear filter"
                              description=""
                            />
                          </Button>
                        </Box>
                      }
                    />
                  </Container>
                  <br/>
                  <Container
                    header={
                      <Header
                        variant="h3"
                        description="These are the data points from Test mode: EASY."
                        actions={
                          <SpaceBetween direction="horizontal" size="m">
                            <Button
                              variant="primary"
                              onClick={() => console.log('This will open a modal')}
                            >
                              Take notes
                            </Button>
                          </SpaceBetween>
                        }
                      >
                        Test mode: EASY
                      </Header>
                    }
                  >
                    <LineChart
                      series={[
                        {
                          title: "Vietnamese Vocabulary",
                          type: "line",
                          data: [
                            {x: new Date(2022, 8, 1), y: 4},
                            {x: new Date(2022, 8, 2), y: 15},
                            {x: new Date(2022, 8, 3), y: 21},
                            {x: new Date(2022, 8, 4), y: 19},
                            {x: new Date(2022, 8, 5), y: 3},
                            {x: new Date(2022, 8, 11), y: 7},
                            {x: new Date(2022, 8, 12), y: 22},
                            {x: new Date(2022, 8, 13), y: 10},
                            {x: new Date(2022, 8, 14), y: 13},
                            {x: new Date(2022, 8, 15), y: 5},
                            {x: new Date(2022, 8, 16), y: 4},
                            {x: new Date(2022, 8, 17), y: 3},
                            {x: new Date(2022, 8, 18), y: 4},
                            {x: new Date(2022, 8, 22), y: 23},
                            {x: new Date(2022, 8, 23), y: 14},
                            {x: new Date(2022, 8, 24), y: 13},
                            {x: new Date(2022, 8, 25), y: 13},
                            {x: new Date(2022, 8, 26), y: 18},
                            {x: new Date(2022, 8, 27), y: 24},
                            {x: new Date(2022, 8, 28), y: 2},
                            {x: new Date(2022, 8, 29), y: 12},
                            {x: new Date(2022, 8, 30), y: 6},
                            {x: new Date(2022, 9, 1), y: 4},
                            {x: new Date(2022, 9, 2), y: 15},
                            {x: new Date(2022, 9, 3), y: 21},
                            {x: new Date(2022, 9, 4), y: 19},
                            {x: new Date(2022, 9, 7), y: 2},
                            {x: new Date(2022, 9, 8), y: 9},
                            {x: new Date(2022, 9, 9), y: 4},
                            {x: new Date(2022, 9, 10), y: 17},
                            {x: new Date(2022, 9, 11), y: 7},
                            {x: new Date(2022, 9, 12), y: 22},
                            {x: new Date(2022, 9, 16), y: 4},
                            {x: new Date(2022, 9, 17), y: 3},
                            {x: new Date(2022, 9, 18), y: 4},
                            {x: new Date(2022, 9, 19), y: 5},
                            {x: new Date(2022, 9, 20), y: 9},
                            {x: new Date(2022, 9, 21), y: 15},
                            {x: new Date(2022, 9, 22), y: 23},
                            {x: new Date(2022, 9, 23), y: 14},
                            {x: new Date(2022, 9, 24), y: 13},
                            {x: new Date(2022, 9, 31), y: 1},
                            {x: new Date(2022, 10, 1), y: 11},
                            {x: new Date(2022, 10, 2), y: 18},
                            {x: new Date(2022, 10, 3), y: 10},
                            {x: new Date(2022, 10, 4), y: 5},
                            {x: new Date(2022, 10, 5), y: 22},
                            {x: new Date(2022, 10, 6), y: 18},
                            {x: new Date(2022, 10, 7), y: 14},
                            {x: new Date(2022, 10, 8), y: 13},
                            {x: new Date(2022, 10, 16), y: 11},
                            {x: new Date(2022, 10, 17), y: 19},
                            {x: new Date(2022, 10, 18), y: 14},
                            {x: new Date(2022, 10, 19), y: 16},
                            {x: new Date(2022, 10, 20), y: 13},
                            {x: new Date(2022, 10, 21), y: 1},
                            {x: new Date(2022, 10, 24), y: 18},
                            {x: new Date(2022, 10, 25), y: 12},
                            {x: new Date(2022, 10, 26), y: 8},
                            {x: new Date(2022, 10, 29), y: 17},
                            {x: new Date(2022, 10, 30), y: 22},
                            {x: new Date(2022, 11, 1), y: 18},
                            {x: new Date(2022, 11, 2), y: 8},
                            {x: new Date(2022, 11, 3), y: 15},
                            {x: new Date(2022, 11, 4), y: 6},
                            {x: new Date(2022, 11, 13), y: 12},
                            {x: new Date(2022, 11, 14), y: 9},
                            {x: new Date(2022, 11, 15), y: 1},
                            {x: new Date(2022, 11, 16), y: 5},
                            {x: new Date(2022, 11, 17), y: 18},
                            {x: new Date(2022, 11, 18), y: 18},
                            {x: new Date(2022, 11, 19), y: 12},
                            {x: new Date(2022, 11, 20), y: 20},
                            {x: new Date(2022, 11, 21), y: 0},
                            {x: new Date(2022, 11, 31), y: 7},
                            {x: new Date(2023, 0, 1), y: 21},
                            {x: new Date(2023, 0, 2), y: 13},
                            {x: new Date(2023, 0, 3), y: 21},
                            {x: new Date(2023, 0, 19), y: 24},
                            {x: new Date(2023, 0, 20), y: 12},
                            {x: new Date(2023, 0, 21), y: 21},
                            {x: new Date(2023, 0, 22), y: 7},
                            {x: new Date(2023, 0, 23), y: 21},
                            {x: new Date(2023, 0, 30), y: 12},
                            {x: new Date(2023, 0, 31), y: 23},
                            {x: new Date(2023, 1, 1), y: 18},
                            {x: new Date(2023, 1, 2), y: 4},
                            {x: new Date(2023, 1, 3), y: 1},
                            {x: new Date(2023, 1, 4), y: 3},
                            {x: new Date(2023, 1, 5), y: 13},
                            {x: new Date(2023, 1, 6), y: 14},
                            {x: new Date(2023, 1, 7), y: 8},
                            {x: new Date(2023, 1, 8), y: 2},
                            {x: new Date(2023, 1, 9), y: 19},
                            {x: new Date(2023, 1, 10), y: 19},
                            {x: new Date(2023, 1, 15), y: 14},
                            {x: new Date(2023, 1, 16), y: 12},
                            {x: new Date(2023, 1, 17), y: 1},
                            {x: new Date(2023, 1, 18), y: 20},
                            {x: new Date(2023, 1, 19), y: 20},
                            {x: new Date(2023, 1, 26), y: 6},
                            {x: new Date(2023, 1, 27), y: 21},
                            {x: new Date(2023, 1, 28), y: 21},
                          ],
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        {
                          title: "Russian Vocabulary",
                          type: "line",
                          data: [
                            {x: new Date(2022, 8, 1), y: 18},
                            {x: new Date(2022, 8, 2), y: 23},
                            {x: new Date(2022, 8, 3), y: 4},
                            {x: new Date(2022, 8, 4), y: 3},
                            {x: new Date(2022, 8, 5), y: 3},
                            {x: new Date(2022, 8, 11), y: 5},
                            {x: new Date(2022, 8, 12), y: 5},
                            {x: new Date(2022, 8, 13), y: 12},
                            {x: new Date(2022, 8, 14), y: 12},
                            {x: new Date(2022, 8, 15), y: 4},
                            {x: new Date(2022, 8, 16), y: 12},
                            {x: new Date(2022, 8, 17), y: 10},
                            {x: new Date(2022, 8, 18), y: 23},
                            {x: new Date(2022, 8, 22), y: 4},
                            {x: new Date(2022, 8, 23), y: 17},
                            {x: new Date(2022, 8, 24), y: 18},
                            {x: new Date(2022, 8, 25), y: 5},
                            {x: new Date(2022, 8, 26), y: 19},
                            {x: new Date(2022, 8, 27), y: 6},
                            {x: new Date(2022, 8, 28), y: 4},
                            {x: new Date(2022, 8, 29), y: 19},
                            {x: new Date(2022, 8, 30), y: 4},
                            {x: new Date(2022, 9, 1), y: 18},
                            {x: new Date(2022, 9, 2), y: 23},
                            {x: new Date(2022, 9, 3), y: 4},
                            {x: new Date(2022, 9, 4), y: 3},
                            {x: new Date(2022, 9, 7), y: 1},
                            {x: new Date(2022, 9, 8), y: 6},
                            {x: new Date(2022, 9, 9), y: 22},
                            {x: new Date(2022, 9, 10), y: 8},
                            {x: new Date(2022, 9, 11), y: 5},
                            {x: new Date(2022, 9, 12), y: 5},
                            {x: new Date(2022, 9, 16), y: 12},
                            {x: new Date(2022, 9, 17), y: 10},
                            {x: new Date(2022, 9, 18), y: 23},
                            {x: new Date(2022, 9, 19), y: 19},
                            {x: new Date(2022, 9, 20), y: 4},
                            {x: new Date(2022, 9, 21), y: 18},
                            {x: new Date(2022, 9, 22), y: 4},
                            {x: new Date(2022, 9, 23), y: 17},
                            {x: new Date(2022, 9, 24), y: 18},
                            {x: new Date(2022, 9, 31), y: 4},
                            {x: new Date(2022, 10, 1), y: 19},
                            {x: new Date(2022, 10, 2), y: 24},
                            {x: new Date(2022, 10, 3), y: 4},
                            {x: new Date(2022, 10, 4), y: 14},
                            {x: new Date(2022, 10, 5), y: 17},
                            {x: new Date(2022, 10, 6), y: 12},
                            {x: new Date(2022, 10, 7), y: 3},
                            {x: new Date(2022, 10, 8), y: 16},
                            {x: new Date(2022, 10, 16), y: 10},
                            {x: new Date(2022, 10, 17), y: 19},
                            {x: new Date(2022, 10, 18), y: 6},
                            {x: new Date(2022, 10, 19), y: 17},
                            {x: new Date(2022, 10, 20), y: 6},
                            {x: new Date(2022, 10, 21), y: 2},
                            {x: new Date(2022, 10, 24), y: 13},
                            {x: new Date(2022, 10, 25), y: 21},
                            {x: new Date(2022, 10, 26), y: 23},
                            {x: new Date(2022, 10, 29), y: 9},
                            {x: new Date(2022, 10, 30), y: 11},
                            {x: new Date(2022, 11, 1), y: 7},
                            {x: new Date(2022, 11, 2), y: 17},
                            {x: new Date(2022, 11, 3), y: 16},
                            {x: new Date(2022, 11, 4), y: 0},
                            {x: new Date(2022, 11, 13), y: 23},
                            {x: new Date(2022, 11, 14), y: 13},
                            {x: new Date(2022, 11, 15), y: 2},
                            {x: new Date(2022, 11, 16), y: 2},
                            {x: new Date(2022, 11, 17), y: 14},
                            {x: new Date(2022, 11, 18), y: 20},
                            {x: new Date(2022, 11, 19), y: 10},
                            {x: new Date(2022, 11, 20), y: 2},
                            {x: new Date(2022, 11, 21), y: 15},
                            {x: new Date(2022, 11, 31), y: 4},
                            {x: new Date(2023, 0, 1), y: 24},
                            {x: new Date(2023, 0, 2), y: 12},
                            {x: new Date(2023, 0, 3), y: 18},
                            {x: new Date(2023, 0, 19), y: 19},
                            {x: new Date(2023, 0, 20), y: 18},
                            {x: new Date(2023, 0, 21), y: 24},
                            {x: new Date(2023, 0, 22), y: 1},
                            {x: new Date(2023, 0, 23), y: 12},
                            {x: new Date(2023, 0, 30), y: 16},
                            {x: new Date(2023, 0, 31), y: 12},
                            {x: new Date(2023, 1, 1), y: 20},
                            {x: new Date(2023, 1, 2), y: 23},
                            {x: new Date(2023, 1, 3), y: 15},
                            {x: new Date(2023, 1, 4), y: 14},
                            {x: new Date(2023, 1, 5), y: 20},
                            {x: new Date(2023, 1, 6), y: 19},
                            {x: new Date(2023, 1, 7), y: 7},
                            {x: new Date(2023, 1, 8), y: 24},
                            {x: new Date(2023, 1, 9), y: 4},
                            {x: new Date(2023, 1, 10), y: 16},
                            {x: new Date(2023, 1, 15), y: 18},
                            {x: new Date(2023, 1, 16), y: 9},
                            {x: new Date(2023, 1, 17), y: 18},
                            {x: new Date(2023, 1, 18), y: 19},
                            {x: new Date(2023, 1, 19), y: 24},
                            {x: new Date(2023, 1, 26), y: 20},
                            {x: new Date(2023, 1, 27), y: 23},
                            {x: new Date(2023, 1, 28), y: 25},
                          ],
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        // {
                        //   title: "Hebrew Vocabulary",
                        //   type: "line",
                        //   data: [
                        //     { x: new Date(1601013600000), y: 131023 },
                        //     { x: new Date(1601014500000), y: 164975 },
                        //     { x: new Date(1601015400000), y: 176980 },
                        //     { x: new Date(1601016300000), y: 168052 },
                        //     { x: new Date(1601017200000), y: 149130 },
                        //     { x: new Date(1601018100000), y: 147299 },
                        //     { x: new Date(1601019000000), y: 169552 },
                        //     { x: new Date(1601019900000), y: 163401 },
                        //     { x: new Date(1601020800000), y: 154091 },
                        //     { x: new Date(1601021700000), y: 199516 },
                        //     { x: new Date(1601022600000), y: 195503 },
                        //     { x: new Date(1601023500000), y: 189953 },
                        //     { x: new Date(1601024400000), y: 101635 },
                        //     { x: new Date(1601025300000), y: 192975 },
                        //     { x: new Date(1601026200000), y: 295951 },
                        //     { x: new Date(1601027100000), y: 218958 },
                        //     { x: new Date(1601028000000), y: 220516 },
                        //     { x: new Date(1601028900000), y: 213557 },
                        //     { x: new Date(1601029800000), y: 165899 },
                        //     { x: new Date(1601030700000), y: 373557 },
                        //     { x: new Date(1601031600000), y: 472331 },
                        //     { x: new Date(1601032500000), y: 486492 },
                        //     { x: new Date(1601033400000), y: 331541 },
                        //     { x: new Date(1601034300000), y: 242262 },
                        //     { x: new Date(1601035200000), y: 194091 },
                        //     { x: new Date(1601036100000), y: 185899 },
                        //     { x: new Date(1601037000000), y: 173401 },
                        //     { x: new Date(1601037900000), y: 171635 },
                        //     { x: new Date(1601038800000), y: 100130 },
                        //     { x: new Date(1601039700000), y: 185951 },
                        //     { x: new Date(1601040600000), y: 104091 },
                        //     { x: new Date(1601041500000), y: 152975 },
                        //     { x: new Date(1601042400000), y: 127299 }
                        //   ],
                        //   valueFormatter: function o(e) {
                        //     return Math.abs(e) >= 1e9
                        //       ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //           "G"
                        //       : Math.abs(e) >= 1e6
                        //       ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //         "M"
                        //       : Math.abs(e) >= 1e3
                        //       ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //         "K"
                        //       : e.toFixed(2);
                        //   }
                        // },
                        {
                          title: "Performance goal",
                          type: "threshold",
                          y: 15,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        }
                      ]}
                      xDomain={[
                        new Date(2022, 10, 27),
                        new Date(2023, 1, 7)
                      ]}
                      yDomain={[0, 25]}
                      i18nStrings={{
                        filterLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterLabel"
                            defaultMessage="Filter displayed data"
                            description=""
                          />
                        ),
                        filterPlaceholder: (
                          <FormattedMessage
                            id="stats.tableStrings.filterPlaceholder"
                            defaultMessage="Filter data"
                            description=""
                          />
                        ),
                        filterSelectedAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterSelectedAriaLabel"
                            defaultMessage="selected"
                            description=""
                          />
                        ),
                        detailPopoverDismissAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.detailPopoverDismissAriaLabel"
                            defaultMessage="Dismiss"
                            description=""
                          />
                        ),
                        legendAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.legendAriaLabel"
                            defaultMessage="Legend"
                            description=""
                          />
                        ),
                        chartAriaRoleDescription: (
                          <FormattedMessage
                            id="stats.tableStrings.chartAriaRoleDescription"
                            defaultMessage="line chart"
                            description=""
                          />
                        ),
                        xTickFormatter: e =>
                          e
                            .toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: !1
                            })
                            .split(",")
                            .join("\n"),
                        yTickFormatter: function o(e) {
                          return Math.abs(e) >= 1e9
                            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                                "G"
                            : Math.abs(e) >= 1e6
                            ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                              "M"
                            : Math.abs(e) >= 1e3
                            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                              "K"
                            : e.toFixed(0);
                        }
                      }}
                      ariaLabel="Multiple data series line chart"
                      errorText="Error loading data."
                      height={300}
                      loadingText="Loading chart"
                      recoveryText="Retry"
                      xScaleType="time"
                      xTitle={
                        <FormattedMessage
                          id="stats.flashcards.xTitle"
                          defaultMessage="Time (UTC)"
                          description=""
                        />
                      }
                      yTitle={
                        <FormattedMessage
                          id="stats.flashcards.yTitle"
                          defaultMessage="Correct flashcards"
                          description=""
                        />
                      }
                      empty={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noDataAvailable"
                            defaultMessage="<b>No data available</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.thereIsNoDataAvailable"
                              defaultMessage="There is no data available"
                              description=""
                            />
                          </Box>
                        </Box>
                      }
                      noMatch={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noMatchingData"
                            defaultMessage="<b>No matching data</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>,
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.noMatchingDataToDisplay"
                              defaultMessage="There is no matching data to display"
                              description=""
                            />
                          </Box>
                          <Button>
                            <FormattedMessage
                              id="stats.clearFilter"
                              defaultMessage="Clear filter"
                              description=""
                            />
                          </Button>
                        </Box>
                      }
                    />
                  </Container>
                  <br/>
                  <Container
                    header={
                      <Header
                        variant="h3"
                        description="These are the data points from Test mode: DIFFICULT."
                        actions={
                          <SpaceBetween direction="horizontal" size="m">
                            <Button
                              variant="primary"
                              onClick={() => console.log('This will open a modal')}
                            >
                              Take notes
                            </Button>
                          </SpaceBetween>
                        }
                      >
                        Test mode: DIFFICULT
                      </Header>
                    }
                  >
                    <LineChart
                      series={[
                        {
                          title: "Vietnamese Vocabulary",
                          type: "line",
                          data: [
                            {x: new Date(2022, 8, 1), y: 22},
                            {x: new Date(2022, 8, 2), y: 9},
                            {x: new Date(2022, 8, 3), y: 19},
                            {x: new Date(2022, 8, 4), y: 10},
                            {x: new Date(2022, 8, 5), y: 11},
                            {x: new Date(2022, 8, 11), y: 9},
                            {x: new Date(2022, 8, 12), y: 23},
                            {x: new Date(2022, 8, 13), y: 11},
                            {x: new Date(2022, 8, 14), y: 7},
                            {x: new Date(2022, 8, 15), y: 6},
                            {x: new Date(2022, 8, 16), y: 3},
                            {x: new Date(2022, 8, 17), y: 21},
                            {x: new Date(2022, 8, 18), y: 11},
                            {x: new Date(2022, 8, 22), y: 23},
                            {x: new Date(2022, 8, 23), y: 11},
                            {x: new Date(2022, 8, 24), y: 20},
                            {x: new Date(2022, 8, 25), y: 20},
                            {x: new Date(2022, 8, 26), y: 20},
                            {x: new Date(2022, 8, 27), y: 12},
                            {x: new Date(2022, 8, 28), y: 9},
                            {x: new Date(2022, 8, 29), y: 9},
                            {x: new Date(2022, 8, 30), y: 18},
                            {x: new Date(2022, 9, 1), y: 22},
                            {x: new Date(2022, 9, 2), y: 9},
                            {x: new Date(2022, 9, 3), y: 19},
                            {x: new Date(2022, 9, 4), y: 10},
                            {x: new Date(2022, 9, 7), y: 14},
                            {x: new Date(2022, 9, 8), y: 22},
                            {x: new Date(2022, 9, 9), y: 6},
                            {x: new Date(2022, 9, 10), y: 9},
                            {x: new Date(2022, 9, 11), y: 9},
                            {x: new Date(2022, 9, 12), y: 23},
                            {x: new Date(2022, 9, 16), y: 3},
                            {x: new Date(2022, 9, 17), y: 21},
                            {x: new Date(2022, 9, 18), y: 11},
                            {x: new Date(2022, 9, 19), y: 6},
                            {x: new Date(2022, 9, 20), y: 3},
                            {x: new Date(2022, 9, 21), y: 23},
                            {x: new Date(2022, 9, 22), y: 23},
                            {x: new Date(2022, 9, 23), y: 11},
                            {x: new Date(2022, 9, 24), y: 20},
                            {x: new Date(2022, 9, 31), y: 3},
                            {x: new Date(2022, 10, 1), y: 4},
                            {x: new Date(2022, 10, 2), y: 5},
                            {x: new Date(2022, 10, 3), y: 2},
                            {x: new Date(2022, 10, 4), y: 11},
                            {x: new Date(2022, 10, 5), y: 17},
                            {x: new Date(2022, 10, 6), y: 3},
                            {x: new Date(2022, 10, 7), y: 3},
                            {x: new Date(2022, 10, 8), y: 17},
                            {x: new Date(2022, 10, 16), y: 3},
                            {x: new Date(2022, 10, 17), y: 23},
                            {x: new Date(2022, 10, 18), y: 19},
                            {x: new Date(2022, 10, 19), y: 6},
                            {x: new Date(2022, 10, 20), y: 8},
                            {x: new Date(2022, 10, 21), y: 14},
                            {x: new Date(2022, 10, 24), y: 12},
                            {x: new Date(2022, 10, 25), y: 23},
                            {x: new Date(2022, 10, 26), y: 1},
                            {x: new Date(2022, 10, 29), y: 4},
                            {x: new Date(2022, 10, 30), y: 20},
                            {x: new Date(2022, 11, 1), y: 19},
                            {x: new Date(2022, 11, 2), y: 20},
                            {x: new Date(2022, 11, 3), y: 11},
                            {x: new Date(2022, 11, 4), y: 25},
                            {x: new Date(2022, 11, 13), y: 9},
                            {x: new Date(2022, 11, 14), y: 0},
                            {x: new Date(2022, 11, 15), y: 24},
                            {x: new Date(2022, 11, 16), y: 4},
                            {x: new Date(2022, 11, 17), y: 19},
                            {x: new Date(2022, 11, 18), y: 14},
                            {x: new Date(2022, 11, 19), y: 19},
                            {x: new Date(2022, 11, 20), y: 3},
                            {x: new Date(2022, 11, 21), y: 4},
                            {x: new Date(2022, 11, 31), y: 3},
                            {x: new Date(2023, 0, 1), y: 18},
                            {x: new Date(2023, 0, 2), y: 12},
                            {x: new Date(2023, 0, 3), y: 17},
                            {x: new Date(2023, 0, 19), y: 0},
                            {x: new Date(2023, 0, 20), y: 2},
                            {x: new Date(2023, 0, 21), y: 4},
                            {x: new Date(2023, 0, 22), y: 13},
                            {x: new Date(2023, 0, 23), y: 12},
                            {x: new Date(2023, 0, 30), y: 12},
                            {x: new Date(2023, 0, 31), y: 5},
                            {x: new Date(2023, 1, 1), y: 17},
                            {x: new Date(2023, 1, 2), y: 16},
                            {x: new Date(2023, 1, 3), y: 6},
                            {x: new Date(2023, 1, 4), y: 4},
                            {x: new Date(2023, 1, 5), y: 1},
                            {x: new Date(2023, 1, 6), y: 13},
                            {x: new Date(2023, 1, 7), y: 16},
                            {x: new Date(2023, 1, 8), y: 21},
                            {x: new Date(2023, 1, 9), y: 15},
                            {x: new Date(2023, 1, 10), y: 22},
                            {x: new Date(2023, 1, 15), y: 23},
                            {x: new Date(2023, 1, 16), y: 22},
                            {x: new Date(2023, 1, 17), y: 5},
                            {x: new Date(2023, 1, 18), y: 12},
                            {x: new Date(2023, 1, 19), y: 15},
                            {x: new Date(2023, 1, 26), y: 15},
                            {x: new Date(2023, 1, 27), y: 8},
                            {x: new Date(2023, 1, 28), y: 24},
                          ],
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        {
                          title: "Russian Vocabulary",
                          type: "line",
                          data: [
                            {x: new Date(2022, 8, 1), y: 0},
                            {x: new Date(2022, 8, 2), y: 18},
                            {x: new Date(2022, 8, 3), y: 13},
                            {x: new Date(2022, 8, 4), y: 21},
                            {x: new Date(2022, 8, 5), y: 12},
                            {x: new Date(2022, 8, 11), y: 10},
                            {x: new Date(2022, 8, 12), y: 17},
                            {x: new Date(2022, 8, 13), y: 16},
                            {x: new Date(2022, 8, 14), y: 14},
                            {x: new Date(2022, 8, 15), y: 3},
                            {x: new Date(2022, 8, 16), y: 3},
                            {x: new Date(2022, 8, 17), y: 4},
                            {x: new Date(2022, 8, 18), y: 24},
                            {x: new Date(2022, 8, 22), y: 15},
                            {x: new Date(2022, 8, 23), y: 7},
                            {x: new Date(2022, 8, 24), y: 15},
                            {x: new Date(2022, 8, 25), y: 23},
                            {x: new Date(2022, 8, 26), y: 18},
                            {x: new Date(2022, 8, 27), y: 13},
                            {x: new Date(2022, 8, 28), y: 23},
                            {x: new Date(2022, 8, 29), y: 12},
                            {x: new Date(2022, 8, 30), y: 13},
                            {x: new Date(2022, 9, 1), y: 0},
                            {x: new Date(2022, 9, 2), y: 18},
                            {x: new Date(2022, 9, 3), y: 13},
                            {x: new Date(2022, 9, 4), y: 21},
                            {x: new Date(2022, 9, 7), y: 16},
                            {x: new Date(2022, 9, 8), y: 1},
                            {x: new Date(2022, 9, 9), y: 9},
                            {x: new Date(2022, 9, 10), y: 4},
                            {x: new Date(2022, 9, 11), y: 10},
                            {x: new Date(2022, 9, 12), y: 17},
                            {x: new Date(2022, 9, 16), y: 3},
                            {x: new Date(2022, 9, 17), y: 4},
                            {x: new Date(2022, 9, 18), y: 24},
                            {x: new Date(2022, 9, 19), y: 17},
                            {x: new Date(2022, 9, 20), y: 25},
                            {x: new Date(2022, 9, 21), y: 18},
                            {x: new Date(2022, 9, 22), y: 15},
                            {x: new Date(2022, 9, 23), y: 7},
                            {x: new Date(2022, 9, 24), y: 15},
                            {x: new Date(2022, 9, 31), y: 1},
                            {x: new Date(2022, 10, 1), y: 8},
                            {x: new Date(2022, 10, 2), y: 8},
                            {x: new Date(2022, 10, 3), y: 4},
                            {x: new Date(2022, 10, 4), y: 18},
                            {x: new Date(2022, 10, 5), y: 22},
                            {x: new Date(2022, 10, 6), y: 6},
                            {x: new Date(2022, 10, 7), y: 3},
                            {x: new Date(2022, 10, 8), y: 23},
                            {x: new Date(2022, 10, 16), y: 0},
                            {x: new Date(2022, 10, 17), y: 6},
                            {x: new Date(2022, 10, 18), y: 23},
                            {x: new Date(2022, 10, 19), y: 24},
                            {x: new Date(2022, 10, 20), y: 3},
                            {x: new Date(2022, 10, 21), y: 3},
                            {x: new Date(2022, 10, 24), y: 3},
                            {x: new Date(2022, 10, 25), y: 5},
                            {x: new Date(2022, 10, 26), y: 15},
                            {x: new Date(2022, 10, 29), y: 24},
                            {x: new Date(2022, 10, 30), y: 1},
                            {x: new Date(2022, 11, 1), y: 15},
                            {x: new Date(2022, 11, 2), y: 15},
                            {x: new Date(2022, 11, 3), y: 11},
                            {x: new Date(2022, 11, 4), y: 3},
                            {x: new Date(2022, 11, 13), y: 2},
                            {x: new Date(2022, 11, 14), y: 19},
                            {x: new Date(2022, 11, 15), y: 1},
                            {x: new Date(2022, 11, 16), y: 16},
                            {x: new Date(2022, 11, 17), y: 14},
                            {x: new Date(2022, 11, 18), y: 16},
                            {x: new Date(2022, 11, 19), y: 18},
                            {x: new Date(2022, 11, 20), y: 24},
                            {x: new Date(2022, 11, 21), y: 18},
                            {x: new Date(2022, 11, 31), y: 7},
                            {x: new Date(2023, 0, 1), y: 8},
                            {x: new Date(2023, 0, 2), y: 14},
                            {x: new Date(2023, 0, 3), y: 7},
                            {x: new Date(2023, 0, 19), y: 1},
                            {x: new Date(2023, 0, 20), y: 5},
                            {x: new Date(2023, 0, 21), y: 8},
                            {x: new Date(2023, 0, 22), y: 12},
                            {x: new Date(2023, 0, 23), y: 18},
                            {x: new Date(2023, 0, 30), y: 10},
                            {x: new Date(2023, 0, 31), y: 19},
                            {x: new Date(2023, 1, 1), y: 16},
                            {x: new Date(2023, 1, 2), y: 0},
                            {x: new Date(2023, 1, 3), y: 17},
                            {x: new Date(2023, 1, 4), y: 24},
                            {x: new Date(2023, 1, 5), y: 22},
                            {x: new Date(2023, 1, 6), y: 10},
                            {x: new Date(2023, 1, 7), y: 1},
                            {x: new Date(2023, 1, 8), y: 10},
                            {x: new Date(2023, 1, 9), y: 6},
                            {x: new Date(2023, 1, 10), y: 18},
                            {x: new Date(2023, 1, 15), y: 13},
                            {x: new Date(2023, 1, 16), y: 6},
                            {x: new Date(2023, 1, 17), y: 23},
                            {x: new Date(2023, 1, 18), y: 24},
                            {x: new Date(2023, 1, 19), y: 12},
                            {x: new Date(2023, 1, 26), y: 21},
                            {x: new Date(2023, 1, 27), y: 17},
                            {x: new Date(2023, 1, 28), y: 21},
                          ],
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        },
                        // {
                        //   title: "Hebrew Vocabulary",
                        //   type: "line",
                        //   data: [
                        //     { x: new Date(1601013600000), y: 131023 },
                        //     { x: new Date(1601014500000), y: 164975 },
                        //     { x: new Date(1601015400000), y: 176980 },
                        //     { x: new Date(1601016300000), y: 168052 },
                        //     { x: new Date(1601017200000), y: 149130 },
                        //     { x: new Date(1601018100000), y: 147299 },
                        //     { x: new Date(1601019000000), y: 169552 },
                        //     { x: new Date(1601019900000), y: 163401 },
                        //     { x: new Date(1601020800000), y: 154091 },
                        //     { x: new Date(1601021700000), y: 199516 },
                        //     { x: new Date(1601022600000), y: 195503 },
                        //     { x: new Date(1601023500000), y: 189953 },
                        //     { x: new Date(1601024400000), y: 101635 },
                        //     { x: new Date(1601025300000), y: 192975 },
                        //     { x: new Date(1601026200000), y: 295951 },
                        //     { x: new Date(1601027100000), y: 218958 },
                        //     { x: new Date(1601028000000), y: 220516 },
                        //     { x: new Date(1601028900000), y: 213557 },
                        //     { x: new Date(1601029800000), y: 165899 },
                        //     { x: new Date(1601030700000), y: 373557 },
                        //     { x: new Date(1601031600000), y: 472331 },
                        //     { x: new Date(1601032500000), y: 486492 },
                        //     { x: new Date(1601033400000), y: 331541 },
                        //     { x: new Date(1601034300000), y: 242262 },
                        //     { x: new Date(1601035200000), y: 194091 },
                        //     { x: new Date(1601036100000), y: 185899 },
                        //     { x: new Date(1601037000000), y: 173401 },
                        //     { x: new Date(1601037900000), y: 171635 },
                        //     { x: new Date(1601038800000), y: 100130 },
                        //     { x: new Date(1601039700000), y: 185951 },
                        //     { x: new Date(1601040600000), y: 104091 },
                        //     { x: new Date(1601041500000), y: 152975 },
                        //     { x: new Date(1601042400000), y: 127299 }
                        //   ],
                        //   valueFormatter: function o(e) {
                        //     return Math.abs(e) >= 1e9
                        //       ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //           "G"
                        //       : Math.abs(e) >= 1e6
                        //       ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //         "M"
                        //       : Math.abs(e) >= 1e3
                        //       ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //         "K"
                        //       : e.toFixed(2);
                        //   }
                        // },
                        {
                          title: "Performance goal",
                          type: "threshold",
                          y: 15,
                          // valueFormatter: function o(e) {
                          //   return Math.abs(e) >= 1e9
                          //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                          //         "G"
                          //     : Math.abs(e) >= 1e6
                          //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          //       "M"
                          //     : Math.abs(e) >= 1e3
                          //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          //       "K"
                          //     : e.toFixed(2);
                          // }
                        }
                      ]}
                      xDomain={[
                        new Date(2022, 10, 27),
                        new Date(2023, 1, 7)
                      ]}
                      yDomain={[0, 25]}
                      i18nStrings={{
                        filterLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterLabel"
                            defaultMessage="Filter displayed data"
                            description=""
                          />
                        ),
                        filterPlaceholder: (
                          <FormattedMessage
                            id="stats.tableStrings.filterPlaceholder"
                            defaultMessage="Filter data"
                            description=""
                          />
                        ),
                        filterSelectedAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.filterSelectedAriaLabel"
                            defaultMessage="selected"
                            description=""
                          />
                        ),
                        detailPopoverDismissAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.detailPopoverDismissAriaLabel"
                            defaultMessage="Dismiss"
                            description=""
                          />
                        ),
                        legendAriaLabel: (
                          <FormattedMessage
                            id="stats.tableStrings.legendAriaLabel"
                            defaultMessage="Legend"
                            description=""
                          />
                        ),
                        chartAriaRoleDescription: (
                          <FormattedMessage
                            id="stats.tableStrings.chartAriaRoleDescription"
                            defaultMessage="line chart"
                            description=""
                          />
                        ),
                        xTickFormatter: e =>
                          e
                            .toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: !1
                            })
                            .split(",")
                            .join("\n"),
                        yTickFormatter: function o(e) {
                          return Math.abs(e) >= 1e9
                            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                                "G"
                            : Math.abs(e) >= 1e6
                            ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                              "M"
                            : Math.abs(e) >= 1e3
                            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                              "K"
                            : e.toFixed(0);
                        }
                      }}
                      ariaLabel="Multiple data series line chart"
                      errorText="Error loading data."
                      height={300}
                      loadingText="Loading chart"
                      recoveryText="Retry"
                      xScaleType="time"
                      xTitle={
                        <FormattedMessage
                          id="stats.flashcards.xTitle"
                          defaultMessage="Time (UTC)"
                          description=""
                        />
                      }
                      yTitle={
                        <FormattedMessage
                          id="stats.flashcards.yTitle"
                          defaultMessage="Correct flashcards"
                          description=""
                        />
                      }
                      empty={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noDataAvailable"
                            defaultMessage="<b>No data available</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.thereIsNoDataAvailable"
                              defaultMessage="There is no data available"
                              description=""
                            />
                          </Box>
                        </Box>
                      }
                      noMatch={
                        <Box textAlign="center" color="inherit">
                          <FormattedMessage
                            id="stats.noMatchingData"
                            defaultMessage="<b>No matching data</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>,
                            }}
                          />
                          <Box variant="p" color="inherit">
                            <FormattedMessage
                              id="stats.noMatchingDataToDisplay"
                              defaultMessage="There is no matching data to display"
                              description=""
                            />
                          </Box>
                          <Button>
                            <FormattedMessage
                              id="stats.clearFilter"
                              defaultMessage="Clear filter"
                              description=""
                            />
                          </Button>
                        </Box>
                      }
                    />
                  </Container>
                </Container>
                <br/>
                <Container
                  header={
                    <Header
                      variant="h2"
                      description={`The single chart below reflects the students score when completing study games assigned by Iuliia.`}
                      actions={
                        <SpaceBetween direction="horizontal" size="m">
                          <Button
                            variant="primary"
                            onClick={() => console.log('This will open a modal')}
                          >
                            Take notes
                          </Button>
                        </SpaceBetween>
                      }
                    >
                      Games
                    </Header>
                  }
                >
                  <LineChart
                    series={[
                      {
                        title: "Vietnamese Vocabulary",
                        type: "line",
                        data: [
                          {x: new Date(2022, 8, 1), y: 4},
                          {x: new Date(2022, 8, 2), y: 14},
                          {x: new Date(2022, 8, 3), y: 11},
                          {x: new Date(2022, 8, 4), y: 12},
                          {x: new Date(2022, 8, 5), y: 20},
                          {x: new Date(2022, 8, 11), y: 1},
                          {x: new Date(2022, 8, 12), y: 16},
                          {x: new Date(2022, 8, 13), y: 25},
                          {x: new Date(2022, 8, 14), y: 23},
                          {x: new Date(2022, 8, 15), y: 23},
                          {x: new Date(2022, 8, 16), y: 7},
                          {x: new Date(2022, 8, 17), y: 21},
                          {x: new Date(2022, 8, 18), y: 17},
                          {x: new Date(2022, 8, 22), y: 20},
                          {x: new Date(2022, 8, 23), y: 1},
                          {x: new Date(2022, 8, 24), y: 16},
                          {x: new Date(2022, 8, 25), y: 18},
                          {x: new Date(2022, 8, 26), y: 13},
                          {x: new Date(2022, 8, 27), y: 8},
                          {x: new Date(2022, 8, 28), y: 17},
                          {x: new Date(2022, 8, 29), y: 9},
                          {x: new Date(2022, 8, 30), y: 21},
                          {x: new Date(2022, 9, 1), y: 4},
                          {x: new Date(2022, 9, 2), y: 14},
                          {x: new Date(2022, 9, 3), y: 11},
                          {x: new Date(2022, 9, 4), y: 12},
                          {x: new Date(2022, 9, 7), y: 18},
                          {x: new Date(2022, 9, 8), y: 23},
                          {x: new Date(2022, 9, 9), y: 1},
                          {x: new Date(2022, 9, 10), y: 15},
                          {x: new Date(2022, 9, 11), y: 1},
                          {x: new Date(2022, 9, 12), y: 16},
                          {x: new Date(2022, 9, 16), y: 7},
                          {x: new Date(2022, 9, 17), y: 21},
                          {x: new Date(2022, 9, 18), y: 17},
                          {x: new Date(2022, 9, 19), y: 14},
                          {x: new Date(2022, 9, 20), y: 10},
                          {x: new Date(2022, 9, 21), y: 6},
                          {x: new Date(2022, 9, 22), y: 20},
                          {x: new Date(2022, 9, 23), y: 1},
                          {x: new Date(2022, 9, 24), y: 16},
                          {x: new Date(2022, 9, 31), y: 8},
                          {x: new Date(2022, 10, 1), y: 1},
                          {x: new Date(2022, 10, 2), y: 11},
                          {x: new Date(2022, 10, 3), y: 7},
                          {x: new Date(2022, 10, 4), y: 7},
                          {x: new Date(2022, 10, 5), y: 7},
                          {x: new Date(2022, 10, 6), y: 14},
                          {x: new Date(2022, 10, 7), y: 3},
                          {x: new Date(2022, 10, 8), y: 15},
                          {x: new Date(2022, 10, 16), y: 10},
                          {x: new Date(2022, 10, 17), y: 24},
                          {x: new Date(2022, 10, 18), y: 11},
                          {x: new Date(2022, 10, 19), y: 9},
                          {x: new Date(2022, 10, 20), y: 21},
                          {x: new Date(2022, 10, 21), y: 12},
                          {x: new Date(2022, 10, 24), y: 4},
                          {x: new Date(2022, 10, 25), y: 19},
                          {x: new Date(2022, 10, 26), y: 8},
                          {x: new Date(2022, 10, 29), y: 24},
                          {x: new Date(2022, 10, 30), y: 19},
                          {x: new Date(2022, 11, 1), y: 6},
                          {x: new Date(2022, 11, 2), y: 6},
                          {x: new Date(2022, 11, 3), y: 14},
                          {x: new Date(2022, 11, 4), y: 16},
                          {x: new Date(2022, 11, 13), y: 17},
                          {x: new Date(2022, 11, 14), y: 14},
                          {x: new Date(2022, 11, 15), y: 8},
                          {x: new Date(2022, 11, 16), y: 21},
                          {x: new Date(2022, 11, 17), y: 15},
                          {x: new Date(2022, 11, 18), y: 15},
                          {x: new Date(2022, 11, 19), y: 18},
                          {x: new Date(2022, 11, 20), y: 17},
                          {x: new Date(2022, 11, 21), y: 6},
                          {x: new Date(2022, 11, 31), y: 16},
                          {x: new Date(2023, 0, 1), y: 0},
                          {x: new Date(2023, 0, 2), y: 21},
                          {x: new Date(2023, 0, 3), y: 8},
                          {x: new Date(2023, 0, 19), y: 4},
                          {x: new Date(2023, 0, 20), y: 13},
                          {x: new Date(2023, 0, 21), y: 4},
                          {x: new Date(2023, 0, 22), y: 12},
                          {x: new Date(2023, 0, 23), y: 14},
                          {x: new Date(2023, 0, 30), y: 15},
                          {x: new Date(2023, 0, 31), y: 20},
                          {x: new Date(2023, 1, 1), y: 18},
                          {x: new Date(2023, 1, 2), y: 4},
                          {x: new Date(2023, 1, 3), y: 13},
                          {x: new Date(2023, 1, 4), y: 21},
                          {x: new Date(2023, 1, 5), y: 5},
                          {x: new Date(2023, 1, 6), y: 1},
                          {x: new Date(2023, 1, 7), y: 14},
                          {x: new Date(2023, 1, 8), y: 19},
                          {x: new Date(2023, 1, 9), y: 18},
                          {x: new Date(2023, 1, 10), y: 1},
                          {x: new Date(2023, 1, 15), y: 15},
                          {x: new Date(2023, 1, 16), y: 1},
                          {x: new Date(2023, 1, 17), y: 4},
                          {x: new Date(2023, 1, 18), y: 24},
                          {x: new Date(2023, 1, 19), y: 18},
                          {x: new Date(2023, 1, 26), y: 6},
                          {x: new Date(2023, 1, 27), y: 1},
                          {x: new Date(2023, 1, 28), y: 11},
                        ],
                        // valueFormatter: function o(e) {
                        //   return Math.abs(e) >= 1e9
                        //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //         "G"
                        //     : Math.abs(e) >= 1e6
                        //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //       "M"
                        //     : Math.abs(e) >= 1e3
                        //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //       "K"
                        //     : e.toFixed(2);
                        // }
                      },
                      {
                        title: "Russian Vocabulary",
                        type: "line",
                        data: [
                          {x: new Date(2022, 8, 1), y: 22},
                          {x: new Date(2022, 8, 2), y: 17},
                          {x: new Date(2022, 8, 3), y: 7},
                          {x: new Date(2022, 8, 4), y: 8},
                          {x: new Date(2022, 8, 5), y: 12},
                          {x: new Date(2022, 8, 11), y: 11},
                          {x: new Date(2022, 8, 12), y: 14},
                          {x: new Date(2022, 8, 13), y: 13},
                          {x: new Date(2022, 8, 14), y: 21},
                          {x: new Date(2022, 8, 15), y: 15},
                          {x: new Date(2022, 8, 16), y: 4},
                          {x: new Date(2022, 8, 17), y: 7},
                          {x: new Date(2022, 8, 18), y: 4},
                          {x: new Date(2022, 8, 22), y: 22},
                          {x: new Date(2022, 8, 23), y: 11},
                          {x: new Date(2022, 8, 24), y: 0},
                          {x: new Date(2022, 8, 25), y: 11},
                          {x: new Date(2022, 8, 26), y: 7},
                          {x: new Date(2022, 8, 27), y: 7},
                          {x: new Date(2022, 8, 28), y: 4},
                          {x: new Date(2022, 8, 29), y: 19},
                          {x: new Date(2022, 8, 30), y: 24},
                          {x: new Date(2022, 9, 1), y: 22},
                          {x: new Date(2022, 9, 2), y: 17},
                          {x: new Date(2022, 9, 3), y: 7},
                          {x: new Date(2022, 9, 4), y: 8},
                          {x: new Date(2022, 9, 7), y: 3},
                          {x: new Date(2022, 9, 8), y: 12},
                          {x: new Date(2022, 9, 9), y: 7},
                          {x: new Date(2022, 9, 10), y: 21},
                          {x: new Date(2022, 9, 11), y: 11},
                          {x: new Date(2022, 9, 12), y: 14},
                          {x: new Date(2022, 9, 16), y: 4},
                          {x: new Date(2022, 9, 17), y: 7},
                          {x: new Date(2022, 9, 18), y: 4},
                          {x: new Date(2022, 9, 19), y: 11},
                          {x: new Date(2022, 9, 20), y: 2},
                          {x: new Date(2022, 9, 21), y: 14},
                          {x: new Date(2022, 9, 22), y: 22},
                          {x: new Date(2022, 9, 23), y: 11},
                          {x: new Date(2022, 9, 24), y: 0},
                          {x: new Date(2022, 9, 31), y: 24},
                          {x: new Date(2022, 10, 1), y: 22},
                          {x: new Date(2022, 10, 2), y: 14},
                          {x: new Date(2022, 10, 3), y: 14},
                          {x: new Date(2022, 10, 4), y: 3},
                          {x: new Date(2022, 10, 5), y: 3},
                          {x: new Date(2022, 10, 6), y: 4},
                          {x: new Date(2022, 10, 7), y: 18},
                          {x: new Date(2022, 10, 8), y: 12},
                          {x: new Date(2022, 10, 16), y: 18},
                          {x: new Date(2022, 10, 17), y: 24},
                          {x: new Date(2022, 10, 18), y: 5},
                          {x: new Date(2022, 10, 19), y: 22},
                          {x: new Date(2022, 10, 20), y: 3},
                          {x: new Date(2022, 10, 21), y: 11},
                          {x: new Date(2022, 10, 24), y: 19},
                          {x: new Date(2022, 10, 25), y: 2},
                          {x: new Date(2022, 10, 26), y: 16},
                          {x: new Date(2022, 10, 29), y: 21},
                          {x: new Date(2022, 10, 30), y: 5},
                          {x: new Date(2022, 11, 1), y: 13},
                          {x: new Date(2022, 11, 2), y: 7},
                          {x: new Date(2022, 11, 3), y: 0},
                          {x: new Date(2022, 11, 4), y: 24},
                          {x: new Date(2022, 11, 13), y: 3},
                          {x: new Date(2022, 11, 14), y: 12},
                          {x: new Date(2022, 11, 15), y: 3},
                          {x: new Date(2022, 11, 16), y: 12},
                          {x: new Date(2022, 11, 17), y: 5},
                          {x: new Date(2022, 11, 18), y: 23},
                          {x: new Date(2022, 11, 19), y: 21},
                          {x: new Date(2022, 11, 20), y: 6},
                          {x: new Date(2022, 11, 21), y: 0},
                          {x: new Date(2022, 11, 31), y: 0},
                          {x: new Date(2023, 0, 1), y: 7},
                          {x: new Date(2023, 0, 2), y: 22},
                          {x: new Date(2023, 0, 3), y: 11},
                          {x: new Date(2023, 0, 19), y: 16},
                          {x: new Date(2023, 0, 20), y: 2},
                          {x: new Date(2023, 0, 21), y: 17},
                          {x: new Date(2023, 0, 22), y: 15},
                          {x: new Date(2023, 0, 23), y: 25},
                          {x: new Date(2023, 0, 30), y: 13},
                          {x: new Date(2023, 0, 31), y: 16},
                          {x: new Date(2023, 1, 1), y: 5},
                          {x: new Date(2023, 1, 2), y: 1},
                          {x: new Date(2023, 1, 3), y: 2},
                          {x: new Date(2023, 1, 4), y: 16},
                          {x: new Date(2023, 1, 5), y: 0},
                          {x: new Date(2023, 1, 6), y: 17},
                          {x: new Date(2023, 1, 7), y: 8},
                          {x: new Date(2023, 1, 8), y: 1},
                          {x: new Date(2023, 1, 9), y: 22},
                          {x: new Date(2023, 1, 10), y: 23},
                          {x: new Date(2023, 1, 15), y: 17},
                          {x: new Date(2023, 1, 16), y: 10},
                          {x: new Date(2023, 1, 17), y: 2},
                          {x: new Date(2023, 1, 18), y: 11},
                          {x: new Date(2023, 1, 19), y: 11},
                          {x: new Date(2023, 1, 26), y: 7},
                          {x: new Date(2023, 1, 27), y: 24},
                          {x: new Date(2023, 1, 28), y: 10},
                        ],
                        // valueFormatter: function o(e) {
                        //   return Math.abs(e) >= 1e9
                        //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //         "G"
                        //     : Math.abs(e) >= 1e6
                        //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //       "M"
                        //     : Math.abs(e) >= 1e3
                        //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //       "K"
                        //     : e.toFixed(2);
                        // }
                      },
                      // {
                      //   title: "Hebrew Vocabulary",
                      //   type: "line",
                      //   data: [
                      //     { x: new Date(1601013600000), y: 131023 },
                      //     { x: new Date(1601014500000), y: 164975 },
                      //     { x: new Date(1601015400000), y: 176980 },
                      //     { x: new Date(1601016300000), y: 168052 },
                      //     { x: new Date(1601017200000), y: 149130 },
                      //     { x: new Date(1601018100000), y: 147299 },
                      //     { x: new Date(1601019000000), y: 169552 },
                      //     { x: new Date(1601019900000), y: 163401 },
                      //     { x: new Date(1601020800000), y: 154091 },
                      //     { x: new Date(1601021700000), y: 199516 },
                      //     { x: new Date(1601022600000), y: 195503 },
                      //     { x: new Date(1601023500000), y: 189953 },
                      //     { x: new Date(1601024400000), y: 101635 },
                      //     { x: new Date(1601025300000), y: 192975 },
                      //     { x: new Date(1601026200000), y: 295951 },
                      //     { x: new Date(1601027100000), y: 218958 },
                      //     { x: new Date(1601028000000), y: 220516 },
                      //     { x: new Date(1601028900000), y: 213557 },
                      //     { x: new Date(1601029800000), y: 165899 },
                      //     { x: new Date(1601030700000), y: 373557 },
                      //     { x: new Date(1601031600000), y: 472331 },
                      //     { x: new Date(1601032500000), y: 486492 },
                      //     { x: new Date(1601033400000), y: 331541 },
                      //     { x: new Date(1601034300000), y: 242262 },
                      //     { x: new Date(1601035200000), y: 194091 },
                      //     { x: new Date(1601036100000), y: 185899 },
                      //     { x: new Date(1601037000000), y: 173401 },
                      //     { x: new Date(1601037900000), y: 171635 },
                      //     { x: new Date(1601038800000), y: 100130 },
                      //     { x: new Date(1601039700000), y: 185951 },
                      //     { x: new Date(1601040600000), y: 104091 },
                      //     { x: new Date(1601041500000), y: 152975 },
                      //     { x: new Date(1601042400000), y: 127299 }
                      //   ],
                      //   valueFormatter: function o(e) {
                      //     return Math.abs(e) >= 1e9
                      //       ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                      //           "G"
                      //       : Math.abs(e) >= 1e6
                      //       ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                      //         "M"
                      //       : Math.abs(e) >= 1e3
                      //       ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                      //         "K"
                      //       : e.toFixed(2);
                      //   }
                      // },
                      {
                        title: "Performance goal",
                        type: "threshold",
                        y: 15,
                        // valueFormatter: function o(e) {
                        //   return Math.abs(e) >= 1e9
                        //     ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        //         "G"
                        //     : Math.abs(e) >= 1e6
                        //     ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        //       "M"
                        //     : Math.abs(e) >= 1e3
                        //     ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        //       "K"
                        //     : e.toFixed(2);
                        // }
                      }
                    ]}
                    xDomain={[
                      new Date(2022, 10, 27),
                      new Date(2023, 1, 7)
                    ]}
                    yDomain={[0, 25]}
                    i18nStrings={{
                      filterLabel: (
                        <FormattedMessage
                          id="stats.tableStrings.filterLabel"
                          defaultMessage="Filter displayed data"
                          description=""
                        />
                      ),
                      filterPlaceholder: (
                        <FormattedMessage
                          id="stats.tableStrings.filterPlaceholder"
                          defaultMessage="Filter data"
                          description=""
                        />
                      ),
                      filterSelectedAriaLabel: (
                        <FormattedMessage
                          id="stats.tableStrings.filterSelectedAriaLabel"
                          defaultMessage="selected"
                          description=""
                        />
                      ),
                      detailPopoverDismissAriaLabel: (
                        <FormattedMessage
                          id="stats.tableStrings.detailPopoverDismissAriaLabel"
                          defaultMessage="Dismiss"
                          description=""
                        />
                      ),
                      legendAriaLabel: (
                        <FormattedMessage
                          id="stats.tableStrings.legendAriaLabel"
                          defaultMessage="Legend"
                          description=""
                        />
                      ),
                      chartAriaRoleDescription: (
                        <FormattedMessage
                          id="stats.tableStrings.chartAriaRoleDescription"
                          defaultMessage="line chart"
                          description=""
                        />
                      ),
                      xTickFormatter: e =>
                        e
                          .toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: !1
                          })
                          .split(",")
                          .join("\n"),
                      yTickFormatter: function o(e) {
                        return Math.abs(e) >= 1e9
                          ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                              "G"
                          : Math.abs(e) >= 1e6
                          ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                            "M"
                          : Math.abs(e) >= 1e3
                          ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                            "K"
                          : e.toFixed(0);
                      }
                    }}
                    ariaLabel="Multiple data series line chart"
                    errorText="Error loading data."
                    height={300}
                    loadingText="Loading chart"
                    recoveryText="Retry"
                    xScaleType="time"
                    xTitle={
                      <FormattedMessage
                        id="stats.flashcards.xTitle"
                        defaultMessage="Time (UTC)"
                        description=""
                      />
                    }
                    yTitle={
                      <FormattedMessage
                        id="stats.flashcards.yTitle"
                        defaultMessage="Correct flashcards"
                        description=""
                      />
                    }
                    empty={
                      <Box textAlign="center" color="inherit">
                        <FormattedMessage
                          id="stats.noDataAvailable"
                          defaultMessage="<b>No data available</b>"
                          description=""
                          values={{
                            b: chunks => <b>{chunks}</b>
                          }}
                        />
                        <Box variant="p" color="inherit">
                          <FormattedMessage
                            id="stats.thereIsNoDataAvailable"
                            defaultMessage="There is no data available"
                            description=""
                          />
                        </Box>
                      </Box>
                    }
                    noMatch={
                      <Box textAlign="center" color="inherit">
                        <FormattedMessage
                          id="stats.noMatchingData"
                          defaultMessage="<b>No matching data</b>"
                          description=""
                          values={{
                            b: chunks => <b>{chunks}</b>,
                          }}
                        />
                        <Box variant="p" color="inherit">
                          <FormattedMessage
                            id="stats.noMatchingDataToDisplay"
                            defaultMessage="There is no matching data to display"
                            description=""
                          />
                        </Box>
                        <Button>
                          <FormattedMessage
                            id="stats.clearFilter"
                            defaultMessage="Clear filter"
                            description=""
                          />
                        </Button>
                      </Box>
                    }
                  />
                </Container>
              </>
            )
          }
        ]}
      />
    </>
  );
}