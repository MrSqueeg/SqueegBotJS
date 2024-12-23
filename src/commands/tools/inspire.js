const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const google = require('images-scraper');
const searches = ["Mountains", "Nature", "Space", "Ocean", "Abstract", "Art", "Glow Art", "Video Game Art", "Monster", "Light", "Dark", "Effects", "Mosaic", "VFX Art", "Magic", "Gradient", "AI Art", "Color Splatter", "Sports", "Old Things", "Random", "Cool Patterns", "Crystals", "Astral", "Celestial Art", "Fire Art", "Fantasy", "City", "City Skyline", "Honeycomb", "Music Art", "Flowers", "Fabric", "Tapestry", "Sculptures", "labyrinth", "Liminal", "Dream Art", "Shadow Art", "Mirage", "Optical Illusions", "Steampunk", "Crayon Art Drawings", "Shape Art", "Nebula", "Ghost", "Horror Art", "Halloween", "Christmas", "Saint Patricks day", "Website Art", "Ice Sculpture", "Neon Lights", "Synthwave", "Cyberpunk Art", "Flash Art", "90's Art", "80's Art", "70's Art", "Electricty", "Food Art", "Clip Art", "Sports Car", "Unique Architecture", "Movie Poster", "Pixel Art", "Voxel Art", "Sunset", "Storm", "Mythology", "Rock", "Gemstones", "Zoo", "3D art", "Airsoft Guns", "Aliens", "Alchemy Art", "Amusement park", "Animation", "Anime", "Apes", "Apocalypse Art", "Art", "Arts and Crafts", "Asian Architecture", "Aztec Art", "Beach", "Bbows", "Bubbles", "Campsites", "Candy", "Carbon Fiber", "Cardboard Art", "Camouflage", "Canyon", "Castle", "Cartoon", "Cave Drawings", "Chains", "Chocolate", "Clouds", "Comic book Artwork", "Crossbow", "Cute Art", "Currency", "Dials", "Diamond", "Dinosaurs Art", "Dungeon", "Explosion Artwork", "Factory", "Fluff", "Forest", "Future", "Glitch", "Glitter", "Gold", "House", "Intricate designs", "Lava Lamp", "Leatherwork", "Lego", "Leonardo DaVinci", "Logo", "Magic wand", "Magic Weapons", "Machinery", "Medieval", "Modern Art", "Old cartoon", "Party", "Pets", "Photography", "Picasso", "Pirate Art", "Plastic", "Potions", "Quantum", "Road Signs", "Robot", "Rust", "Sandstorm", "Scales", "Science", "Sillouette", "Sketch", "Snake", "Snow", "Solar Panel", "Space Station", "Sparkles", "Stained Glass Art", "Staff", "Steel", "Superhero", "Sunshine", "Swords", "Tile Art", "Tornado", "Totem Poll", "Toys", "Underwater", "Van Gogh", "Volcano", "Wagon", "Water Guns", "Wild West Art", "Wood", "Coral Reef", "Serenity", "Energy", "Nostalgia", "Chaos", "Whimsical", "Opera", "Unity", "Fusion", "Ephemeral", "Isolation", "Duality Art", "Rhythm", "Imaginative art", "Fluid Art", "Sanctuary", "Echo", "Eclipse", "Horizon", "Rainbows", "Waterfall", "Sand", "Cave", "Autumn", "Swamps", "Blood", "Geysers", "Bamboo", "Abyss", "Impressionism", "Cubism", "Surrealism", "Pop Art", "Minimalism", "Renaissance Art", "Fauvism", "Gothic Art", "Pointillism", "Theater", "Casino", "Circus", "Circuitry", "Office Interior", "Stuffed Animals", "Piping", "Claymation", "Origami", "Weapon Skin", "In game Cosmetics"]

module.exports = {
    data: new SlashCommandBuilder()
    .setName('inspire')
    .setDescription('Attempts to find you inspiration for your projects!')
        .addStringOption(option => option.setName('query').setDescription('im required to have this so the bot doesnt break').setRequired(false)),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const { options } = interaction;

        //const query = options.getString('query');
        
        const query = searches[Math.floor(Math.random() * searches.length)];

        const image = new google({
            puppeteer: {
                headless: true,
            },
        });

        const results = await image.scrape(query, 50);

        var rand = Math.floor(Math.random() * 49);
        const mainEmbed = new EmbedBuilder().setURL('https://youtube.com').setImage(results[rand].url);

        var rand = Math.floor(Math.random() * 49)
        const secondEmbed = new EmbedBuilder().setURL('https://youtube.com').setImage(results[rand].url);

        var rand = Math.floor(Math.random() * 49)
        const thirdEmbed = new EmbedBuilder().setURL('https://youtube.com').setImage(results[rand].url);
        
        var rand = Math.floor(Math.random() * 49)
        const fourthEmbed = new EmbedBuilder().setURL('https://youtube.com').setImage(results[rand].url);

        const Embed = [mainEmbed, secondEmbed, thirdEmbed, fourthEmbed];

        await interaction.channel.send({
            content: 'Search Term: ' + query + '\nIf you have any ideas for search terms please let me know',
            embeds: [mainEmbed, secondEmbed, thirdEmbed, fourthEmbed],
        });
    }
}