import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { borderLeft } from '@mui/system';
import OpenSeaApi from "./apis/OpenSeaApi"
import {useEffect, useState} from "react"

const filter = createFilterOptions();

export default function FreeSoloCreateOption({onSubmit}) {
  console.log("TYPE OFFF  " + onSubmit)
  const [value, setValue] = React.useState(null);
  
// if (value) {
//   console.log(value.api)
// } else {
//   console.log(value)
// }

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={top100Films}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 700, borderRadius: 10}}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search for a collection.." />
      )}
    />


    
  );

}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Bored Ape Chemistry Club', api:'bored-ape-chemistry-club' },
  { title: "OSF's Red Lite District", api: 'osf-rld' },
  { title: 'Pudgy Rods', api: 'pudgyrods' },
  { title: 'Champions Ascension', api: 'champions-ascension-prime-eternal' },
  { title: 'Crypto Unicorns Land Market', api: 'crypto-unicorns-land-market' },
  { title: "Lil Pudgys", api: 'lilpudgys' },
  { title: 'Gazers by Matt Kane', api: 'gazers-by-matt-kane' },
  {
    title: 'Pudgy Penguins',
    api: 'pudgypenguins',
  },
  { title: "OSF's 7 Deadly Sins", api: 'osf-7-sins' },
  { title: 'WhIsBe Vandalz', api: 'whisbe-vandalz' },
  {
    title: 'RTFKT SKIN VIAL: EVO X',
    api: 'skinvial-evox',
  },
  {
    title: 'META KONGZ OFFICIAL',
    api: 'meta-kongz-official',
  },
  { title: 'CryptoNinja Partners', api: 'cryptoninjapartners' },
  { title: 'VaynerSports Pass VSP', api: 'vaynersports-pass-vsp' },
  {
    title: 'RTFKT x Nike Dunk Genesis CRYPTOKICKS',
    api: 'rtfkt-nike-cryptokicks',
  },
  { title: "One Flew Over the Cuckoo's Nest", api: 1975 },
  { title: 'Bored Ape Yacht Club', api: 'boredapeyachtclub' },
  { title: 'Mutant Ape Yacht Club', api: 'mutant-ape-yacht-club' },
  { title: 'CryptoPunks', api: 'cryptopunks' },
  {
    title: 'VeeFriends Series 2',
    api: 'veefriends-series-2',
  },
  { title: 'Adidas Originals Into the Metaverse', api: 'adidasoriginals' },
  { title: 'Otherdeed for Otherside', api: 'otherdeed' },
  { title: 'Psychedelics Anonymous Genesis', api: 'psychedelics-anonymous-genesis' },
  { title: "Webaverse Genesis Pass", api: 'webaverse-genesis-pass' },
  { title: 'God Hates NFTees', api: 'godhatesnftees' },
  { title: 'CryptoDickbutts', api: 'cryptodickbutts-s3' },
  { title: 'Doodles', api: 'doodles-official' },
  { title: 'Rare Apepe YC', api: 'rareapepeyachtclub' },
  { title: 'Chimpers', api: 'chimpersnft' },
  { title: 'CyberKongz', api: 'cyberkongz' },
  { title: 'VeeFriends', api: 'veefriends' },
  { title: 'The Sandbox', api: 'sandbox' },
  { title: 'BEANZ Official', api: 'beanzofficial' },
  { title: 'Gutter Cat Gang', api: 'guttercatgang' },
  { title: 'The GODA Mint Pass', api: 'goda-mint-pass' },
  { title: 'Invisible Friends', api: 'invisiblefriends' },
  { title: 'Bored & Dangerous', api: 'bored-and-dangerous' },
  { title: 'Goblintown.wtf', api: 'goblintownwtf' },
  { title: 'Meebits', api: 'meebits' },
];
