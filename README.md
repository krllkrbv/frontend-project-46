### Hexlet tests and linter status:
[![Actions Status](https://github.com/krllkrbv/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/krllkrbv/frontend-project-46/actions)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=krllkrbv_frontend-project-46&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=krllkrbv_frontend-project-46)

## Description

This is a CLI utility to determine the differences between data configurations.

Supports working with two files of different formats: json, yaml.
Works with flat and tree data structures.
Has various output formats: stylish, plain, json

## Installation

### 1. Clone repository:
    git@github.com:krllkrbv/frontend-project-46.git
### 2. Install dependencies:
    npm install
### 3. Install local packages:
    sudo npm link
    
## Usage

### to see docs:
    gendiff -h  

### to generate differences with default stylish output:
    gendiff <path to file1> <path to file2>

### to plain output:
    gendiff --format plain <path to file1> <path to file2> 

### to json output:
    gendiff -f json <path to file1> <path to file2> 
    
## Demonstration
<a href="https://asciinema.org/a/dCNPXBTvZzo9XTYQBNYtmyBhp" target="_blank"><img src="https://asciinema.org/a/dCNPXBTvZzo9XTYQBNYtmyBhp.svg" /></a>
