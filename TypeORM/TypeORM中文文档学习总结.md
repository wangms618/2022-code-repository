# TypeORM 

1. 安装
`npm install typeorm --save`

2. 还需安装`reflect-metadata`:
`npm install reflect-metadata --save`  
并且需要在应用程序的全局位置导入（例如在app.ts中）  
`import "reflect-metadata"`
3. 你可能还需要安装 node typings(以此来使用 Node 的智能提示):
`npm install @types/node --save`
4. 安装数据驱动
`npm install mysql2 --save`

TypeScript 配置
此外，请确保你使用的是 TypeScript 编译器版本2.3或更高版本，并且已经在tsconfig.json中启用了以下设置:
```ts
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

后续配置可看文档[TypeORM中文文档](https://typeorm.biunav.com/zh/#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)


## 创建数据库表
----
### 创建一个模型
----
使用数据库从创建表开始。如何告诉 TypeORM 创建数据库表？答案是 - 通过模型。 应用程序中的模型即是数据库中的表。
举个例子, 你有一个Photo 模型:
```ts
export class Photo {
    id: number;
    name: string;
    description: string;
    filename: string;
    views: number;
}
```
并且希望将 photos 存储在数据库中。要在数据库中存储内容，首先需要一个数据库表，并从模型中创建数据库表。但是并非所有模型，只有您定义为entities的模型。

### 创建一个实体
`Entity`是由`@Entity`装饰器装饰的模型。将为此类模型创建数据库表。你可以使用 `TypeORM` 处理各处的实体，可以使用它们 `load/insert/update/remove` 并执行其他操作。
让我们将`Photo`模型作为一个实体
```ts
import { Entity } from "typeorm";

@Entity()
export class Photo {
    id: number;
    name: string;
    description: string;
    filename: string;
    views: number;
    isPublished: boolean;
}
```
现在，将为`Photo`实体创建一个数据库表，我们将能够在应用程序中的任何位置使用它。 我们已经创建了一个数据库表，但是没有哪个字段属于哪一列，下面让我们在数据库表中创建几列。

### 创建表列
要添加数据库列，你只需要将要生成的实体属性加上@Column装饰器。
```ts
import { Entity, Column } from "typeorm";

@Entity()
export class Photo {
    @Column()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    filename: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;
}
```
现在 `id, name, description, filename, views 和 isPublished` 列将会被添加到`photo`表中。 数据库中的列类型是根据你使用的属性类型推断的，例如： `number`将被转换为`integer`，`string`将转换为`varchar`，`boolean`转换为`bool`等。但你也可以通过在`@Column`装饰器中隐式指定列类型来使用数据库支持的任何列类型。

我们已经生成了一个包含列的数据库表，但还剩下一件事。每个数据库表必须具有包含主键的列。

### 创建主列
每个实体必须至少有一个主键列。这是必须的，你无法避免。要使列成为主键，您需要使用`@PrimaryColumn`装饰器。
```ts
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Photo {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    filename: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;
}
```

### 创建自动生成的列
假设你希望 id 列自动生成（这称为 auto-increment/sequence/serial/generated identity column）。为此你需要将`@PrimaryColumn`装饰器更改为`@PrimaryGeneratedColumn`装饰器：
```ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    filename: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;
}
```

### 列数据类型
接下来，让我们修复数据类型。默认情况下，字符串被映射到一个 `varchar(255)`类型（取决于数据库类型）。 数字被映射到一个类似整数类型（取决于数据库类型）。但是我们不希望所有的列都是有限的 `varchars` 或整数，让我们修改下代码以设置想要的数据类型：
```ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column("double")
    views: number;

    @Column()
    isPublished: boolean;
}
```
列类型是特定于数据库的。你可以设置数据库支持的任何列类型。有关支持的列类型的更多信息，请参见[这里](https://typeorm.biunav.com/zh/entities.html#%E5%AE%9E%E4%BD%93%E6%98%AF%E4%BB%80%E4%B9%88)