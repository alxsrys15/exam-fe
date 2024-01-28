-- CreateTable
CREATE TABLE `Referrals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `given_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `surname` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `house_number` VARCHAR(191) NOT NULL,
    `street_name` VARCHAR(191) NOT NULL,
    `suburb` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `post_code` INTEGER NOT NULL,
    `country` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
