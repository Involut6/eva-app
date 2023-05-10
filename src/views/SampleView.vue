<script setup></script>

<template>
    <div class="container">
        <header>
            Sample Information
        </header>
        <div class="content">
            <p><span>Sample Name:</span> Tanimowo Arikutaku</p>
            <p><span>Sample Status:</span> Received</p>
            <p><span>Salinity:</span> In progress</p>
            <p><span>Ph:</span> Completed</p>
            <p><span>Date Created:</span></p>
            <button>Download</button>
        </div>
        
    </div>
</template>

<style scoped>

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;

}
.container {
    background-color: rgba(211, 211, 211, 0.137);
    width: 450px;
    border-radius: 20px;
    margin: 6rem auto;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 1em 1.2em;
}

header {
    color: #009efb;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
}

.content {
    padding: 1em 0;
}

.content p {
    padding: 0.5em 1em;
    font-size: 1.2em;
    background-color: #009efb;
    color: white;
    margin-bottom: 1em;
    border-radius: 10px;
}

span {
    font-weight: bold;
}

button {
    padding: 0.8em;
    border: 2px solid #009efb;
    color: #009efb;
    width: 10em;
    border-radius: 20px;
    margin: auto;
    display: flex;
    justify-content: center;
}

button:hover {
    background-color: #009efb;
    color: white;
    font-weight: bold;
}

</style>